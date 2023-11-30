
import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/api/v1/users'); // Replace with your API endpoint
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [axiosSecure]);

    const handelMakeOrganizer = user => {
        axiosSecure.patch(`/api/v1/users/organizer/${user._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Organizer Now!`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Medical Camp | Manage All User</title>
            </Helmet>
            <SectionTitle
                subHeading={"All User"}
                heading={"Manga All User"}
            ></SectionTitle>
            <div className="flex justify-evenly">
                <h2>All User</h2>
                <h2>Total User:{users.length}</h2>
            </div>
            <div>
                <div className="ml-6">
                    <h2 className="text-2xl text-center mb-2 font-bold">Total User: {users.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Serial No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === 'organizer' ? 'Organizer' : <button onClick={() => handelMakeOrganizer(user)} className="btn btn-ghost btn-xs"><FaUsers></FaUsers></button>}
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;