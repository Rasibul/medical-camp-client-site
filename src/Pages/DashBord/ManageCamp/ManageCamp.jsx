import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import usePopularCamp from "../../../Hook/usePopularCamp";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ManageCamp = () => {
    const [popularCamp, , refetch] = usePopularCamp();
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item) => {
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
                const res = await axiosSecure.delete(`/api/v1/all-camp/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.campName} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div className="container mx-auto">
            <SectionTitle
                subHeading="Manage camp"
                heading="Manage All Camp"
            />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="p-2">#</th>
                            <th className="p-2">Camp Name</th>
                            <th className="p-2">Date And Time</th>
                            <th className="p-2">Venue</th>
                            <th className="p-2">Camp Fee</th>
                            <th className="p-2">Specialized Service Provider</th>
                            <th className="p-2">Healthcare Professionals</th>
                            <th className="p-2">Target Audience</th>
                            <th className="p-2">Update</th>
                            <th className="p-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {popularCamp.map((item, index) => (
                            <tr key={item._id}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{item.campName}</td>
                                <td className="p-2">{item.scheduledDateTime}</td>
                                <td className="p-2">{item.venueLocation}</td>
                                <td className="p-2">${item.campFees}</td>
                                <td className="p-2">${item.specializedServices}</td>
                                <td className="p-2">${item.healthcareProfessionals}</td>
                                <td className="p-2">${item.targetAudience}</td>
                                <td className="p-2">
                                    <Link to={`/dashboard/update-camp/${item._id}`}>
                                        <button className="btn btn-ghost btn-lg bg-orange-500">
                                            <FaEdit className="text-white" />
                                        </button>
                                    </Link>
                                </td>
                                <td className="p-2">
                                    <button
                                       onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg"
                                    >
                                        <FaTrashAlt className="text-red-600" />
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

export default ManageCamp;
