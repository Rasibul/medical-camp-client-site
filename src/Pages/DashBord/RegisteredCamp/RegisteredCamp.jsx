
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";


const RegisteredCamp = () => {
    const axiosSecure = useAxiosSecure()
    const [register, setRegister] = useState([]);
    console.log(register)
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
    const totalCampFee = register.reduce((total, item) => {
        const campFee = parseInt(item.campFee);
        return isNaN(campFee) ? total : total + campFee;
    }, 0);
    // console.log(totalCampFee)
    return (
        <div>
            <div className="flex justify-between font-bold text-lg sm:text-xl lg:text-2xl">
                <h2>Total Camp Register: {register.length}</h2>
                <h2>Total Fee: ${totalCampFee}</h2>
                {register.length ? (
                    <Link to="/dashboard/payment">
                        <button className="btn bg-red-500 px-6 py-2">Pay</button>
                    </Link>
                ) : (
                    <button disabled className="btn bg-red-500 px-6 py-2 cursor-not-allowed">Pay</button>
                )}
            </div>

            <div className="overflow-x-auto mt-4 ml-4 font-bold">
                <table className="table w-full border-collapse border rounded-md">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2">#</th>
                            <th className="p-2">Camp Name</th>
                            <th className="p-2">Date And Time</th>
                            <th className="p-2">Venue</th>
                            <th className="p-2">Camp Fee</th>
                            <th className="p-2">Payment Status</th>
                            <th className="p-2">Confirmation Status</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {register.map((item, index) => (
                            <tr key={item._id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{item.campName}</td>
                                <td className="p-2">{item.scheduledDateTime}</td>
                                <td className="p-2">{item.venue}</td>
                                <td className="p-2">${item.campFee}</td>
                                <td className="p-2">ok</td>
                                <td className="p-2">ok</td>
                                <td className="p-2">
                                    <button className="btn btn-ghost btn-xs">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default RegisteredCamp;
