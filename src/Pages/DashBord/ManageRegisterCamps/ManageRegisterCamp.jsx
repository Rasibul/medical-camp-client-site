import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const ManageRegisterCamp = () => {
    const axiosSecure = useAxiosSecure()
    const [manageRegister, setManageRegister] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/api/v1/register'); // Replace with your API endpoint
                setManageRegister(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [axiosSecure]);

    const handleDeleteItem = (register) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/api/v1/register/${register._id}`);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${register.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div>
            <Helmet>
                <title>Medical Camp | Manage All Register</title>
            </Helmet>
            <SectionTitle
                subHeading={"manage register camp"}
                heading={"Mange Register Camps"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="p-2">#</th>
                            <th className="p-2">Camp Name</th>
                            <th className="p-2">Date And Time</th>
                            <th className="p-2">Venue</th>
                            <th className="p-2">Camp Fee</th>
                            <th className="p-2">Register Name</th>
                            <th className="p-2">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {manageRegister.map((item, index) => (
                            <tr key={item._id}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{item.campName}</td>
                                <td className="p-2">{item.scheduledDateTime}</td>
                                <td className="p-2">{item.venue}</td>
                                <td className="p-2">${item.campFee}</td>
                                <td className="p-2">${item.name}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost  bg-orange-500"> Cancel Register
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageRegisterCamp;