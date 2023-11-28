
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const RegisteredCamp = () => {
    const axiosSecure = useAxiosSecure()
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
    const totalCampFee = register.reduce((total, item) => {
        const campFee = parseInt(item.campFee);
        return isNaN(campFee) ? total : total + campFee;
    }, 0);
    const handeDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/register/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-between font-bold text-lg sm:text-xl lg:text-2xl">
                <h2>Total Camp Register: {register.length}</h2>
                <h2>Total Fee: ${totalCampFee}</h2>
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
                                <td className="">{index + 1}</td>
                                <td className="">{item.campName}</td>
                                <td className="">{item.scheduledDateTime}</td>
                                <td className="">{item.venue}</td>
                                <td className="">${item.campFee}</td>
                                <div className="">
                                    <td className="">
                                        UnPaid
                                        <Link to="/dashboard/payment">
                                        <button className="btn btn-xs bg-red-400">Pay</button>
                                        </Link>
                                    </td>
                                </div>
                                <td className="p-2">ok</td>
                                <td className="p-2">
                                    <button onClick={()=> handeDelete(item._id)} 
                                    className="btn btn-ghost btn-xs">Cancel</button>
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
