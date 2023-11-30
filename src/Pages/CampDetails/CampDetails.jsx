
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useOrganizer from "../../Hook/useOrganizer";

const CampDetails = () => {
    const [isOrganizer] = useOrganizer()
    const campDetails = useLoaderData()
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    // console.log(campDetails)

    const onSubmit = async (data) => {
        // console.log(data)
        const useInfo = {
            name: data.name,
            age: data.age,
            campFee: data.campFee,
            details: data.details,
            emergency: data.emergency,
            gender: data.gender,
            number: data.number,
            adress: data.adress,
            campName: data.campName,
            scheduledDateTime: data.scheduledDateTime,
            venue: data.venue

        }
        const userReg = await axiosSecure.post('/api/v1/register', useInfo)
        // console.log(userReg.data)
        if (userReg.data.insertedId) {
            // show success popup
            reset();
            navigate('/')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} join the ${campDetails.campName}.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <Helmet>
                <title>Medical Camp | Camp Details</title>
            </Helmet>
            <div className="card card-compact  shadow-xl">
                <img src={campDetails.image} alt="" />
                <div className="p-4 font-bold">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-2">{campDetails.campName}</h2>
                    <p className="text-sm text-gray-600 mb-2">Camp Fee: ${campDetails.campFees}</p>
                    <p className="text-sm text-gray-600 mb-2">Time: {campDetails.scheduledDateTime}</p>
                    <p className="text-sm text-gray-600 mb-2">Venue: {campDetails.venueLocation}</p>
                    <p className="text-sm text-gray-600 mb-2">Services: {campDetails.specializedServices}</p>
                    <p className="text-sm text-gray-600 mb-4">Description: {campDetails.description}</p>
                    <div className="text-center">
                        {
                            isOrganizer ? <>
                                <button className="bg-blue-500 disabled text-white px-4 py-2 rounded-md hover:bg-blue-700">Organizer Action</button>
                            </>
                                :
                                <>
                                    <button className="bg-blue-500  text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={() => document.getElementById('my_modal_5').showModal()}>Join Now</button>
                                </>
                        }

                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box text-center grid justify-center items-center">
                                <div className="modal-action">
                                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                                        {/* if there is a button in form, it will close the modal */}
                                        <h3 className="font-bold text-lg mb-4">Participant Registration</h3>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name"
                                                {...register('name', { required: true })} name="name" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Age</span>
                                            </label>
                                            <input type="number" placeholder="Age"
                                                {...register('age', { required: true })} name="age" className="input input-bordered" required />
                                        </div>

                                        {/* Add other input fields as needed */}
                                        {/* ... */}

                                        <label className="label">
                                            Camp Name:
                                            <input type="text" {...register('campName', { required: true })} value={campDetails.campName} readOnly className="input input-bordered" />
                                        </label>
                                        <label className="label">
                                            Venue:
                                            <input type="text" {...register('venue', { required: true })} value={campDetails.venueLocation} readOnly className="input input-bordered" />
                                        </label>
                                        <label className="label">
                                            Date and Time:
                                            <input type="text" {...register('scheduledDateTime', { required: true })} value={campDetails.scheduledDateTime} readOnly className="input input-bordered" />
                                        </label>
                                        <label className="label">
                                            Camp Fees:$
                                            <input type="text" {...register('campFee', { required: true })} value={campDetails.campFees} readOnly className="input input-bordered" />
                                        </label>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone Number</span>
                                            </label>
                                            <input type="text" placeholder="PhoneNumbr" {...register('number', { required: true })} name="number" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text  ">Choose Gender</span>
                                            </label>
                                            <select defaultValue="default" {...register('gender', { required: true })}
                                                className="select select-bordered w-full">
                                                <option disabled value="default text-white font-bold ">Select a Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Adress </span>
                                            </label>
                                            <input type="text" placeholder="Adress" {...register('adress', { required: true })} name="adress" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Health Details</span>
                                            </label>
                                            <textarea name="details" {...register('details', { required: true })} className="textarea textarea-bordered h-24" placeholder="Health Details"></textarea>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Emergency Number</span>
                                            </label>
                                            <input type="text" placeholder="EmergencyNumbr" {...register('emergency', { required: true })} name="emergency" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control mt-6">
                                            <input className="bg-blue-500 hover:bg-blue-700 px-4 py-2" type="submit" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CampDetails;