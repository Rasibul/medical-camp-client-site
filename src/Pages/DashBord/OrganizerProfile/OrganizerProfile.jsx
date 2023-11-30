import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const OrganizerProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit } = useForm()
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

    const onSubmit = async (data) => {
        console.log(data)

        const updateProfile = {
            name: data.displayName,
            email: data.email
        }

        const profile = await axiosSecure.patch(`/api/v1/users/organizer/${users._id}`, updateProfile);
        // console.log(campRes.data)
        if (profile.data.modifiedCount > 0) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.campName} is updated to the Camp.`,
                showConfirmButton: false,
                timer: 1500
            });
            // navigate('/availableCamps')
        }
    }

    return (
        <div>
            <Helmet>
                <title>Medical Camp | Dashbord Profile</title>
            </Helmet>
            <SectionTitle subHeading={"Organizer Profile"} heading={"Profile"} />

            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white shadow-lg rounded-2xl w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
                    <img
                        alt="profile"
                        src="https://wallpapercave.com/wp/wp10784415.jpg"
                        className="w-full mb-4 rounded-t-lg h-36 object-cover"
                    />
                    <div className="flex flex-col items-center justify-center  -mt-16">
                        <a href="#" className="relative block">
                            <img
                                alt="profile"
                                src={user.photoURL}
                                className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
                            />
                        </a>
                        <p className="mt-2 text-xl font-medium text-gray-800">
                            User Id: {user.uid}
                        </p>
                        <div className="w-full p-2 mt-4 rounded-lg">
                            <div className="flex flex-wrap items-center justify-center text-sm text-gray-600">
                                <div className=" text-center w-full">
                                    <p className="flex flex-col mb-2 md:mb-0">
                                        Name
                                        <span className="font-bold text-black">
                                            {user.displayName}
                                        </span>
                                    </p>
                                    <p className="flex flex-col mb-2 md:mb-0">
                                        Email
                                        <span className="font-bold text-black">{user.email}</span>
                                    </p>
                                </div>
                                <div className="flex flex-col md:flex-row w-full justify-center my-5">
                                    <div className="text-center">
                                        <button className="bg-[#F43F5E] px-6 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] mb-2 md:mb-0 md:mr-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Update Profile</button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box text-center grid justify-center items-center">
                                                <div className="modal-action">
                                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Name</span>
                                                            </label>
                                                            <input type="text" defaultValue={user.displayName} {...register("disPlayName")} placeholder="Name" name="Name" className="input input-bordered" required />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Email</span>
                                                            </label>
                                                            <input type="email" defaultValue={user.email} {...register("email")} placeholder="email" name="email" className="input input-bordered" required />
                                                        </div>
                                                        <div className="form-control mt-6">
                                                            <input className="btn btn-warning" type="submit" value="Submit" />
                                                        </div>
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2">Close</button>
                                                        </form>


                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerProfile;
