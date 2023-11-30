import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakOut from "../../../Component/CheakOut/CheakOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const PayMent = () => {
    return (
        <div>
            <SectionTitle
            subHeading={"payement"}
            heading={"please Pay First"}
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheakOut></CheakOut>
                </Elements>
            </div>
        </div>
    );
};

export default PayMent;