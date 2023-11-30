import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";


const CheakOut = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe()
    const elements = useElements()
    const [register, setRegister] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/api/v1/register'); // Replace with your API endpoint
                setRegister(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [axiosSecure]);
    const totalPrice = register.reduce((total, item) => {
        const campFee = parseInt(item.campFee);
        return isNaN(campFee) ? total : total + campFee;
    }, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handelSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
        }
        if (paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(), // utc date convert. use moment js to 
                // cartIds: register.map(item => item._id),
                // menuItemIds: register.map(item => item.menuId),
                status: 'pending'
            }
            const res = await axiosSecure.post('/payments', payment);
            console.log('payment saved', res.data);
            // refetch();
            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.displayName} thank you for payment your transactionId is ${transactionId}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                // navigate('/dashboard/paymentHistory')
            }
        }

    }
    return (
        <form onSubmit={handelSubmit} className=" max-w-lg mx-auto">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4 " type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {/* Additional elements like error messages or transaction info can be added here */}
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheakOut;