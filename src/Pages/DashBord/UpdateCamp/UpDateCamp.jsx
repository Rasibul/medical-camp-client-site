import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpDateCamp = () => {
    const { campName, scheduledDateTime, campFees, venueLocation, specializedServices, healthcareProfessionals, targetAudience, description,  _id } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        // console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const updateCamp = {
                campName: data.campName,
                scheduledDateTime: data.scheduledDateTime,
                campFees: data.campFees,
                venueLocation: data.venueLocation,
                specializedServices: data.specializedServices,
                healthcareProfessionals: data.healthcareProfessionals,
                targetAudience: data.targetAudience,
                description: data.description,
                image: res.data.data.display_url
            }
            // console.log(updateCamp)
            // 
            const campRes = await axiosSecure.patch(`/api/v1/all-camp/${_id}`, updateCamp);
            // console.log(campRes.data)
            if (campRes.data.modifiedCount > 0) {
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.campName} is updated to the Camp.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/availableCamps')
            }
        }
        // console.log('with image url', res.data);
    };
    return (
        <div>
            <SectionTitle
                subHeading={"Update Camp"}
                heading={"New details Added This Camp"}
            ></SectionTitle>
            <div className="ml-8 mb-4 bg-red-400 border rounded-lg p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Camp Name*</label>
                        <input
                            type="text"
                            placeholder="Camp Name"
                            defaultValue={campName}
                            {...register('campName', { required: true })}
                            required
                            className="input w-full"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Schedule Date and Time*</label>
                            <input
                                type="text"
                                placeholder="scheduledDateTime"
                                defaultValue={scheduledDateTime}
                                {...register('scheduledDateTime', { required: true })}
                                className="input w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Camp Fees*</label>
                            <input
                                type="number"
                                placeholder="campFees"
                                defaultValue={campFees}
                                {...register('campFees', { required: true })}
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Venue*</label>
                            <input
                                type="text"
                                placeholder="venueLocation"
                                defaultValue={venueLocation}
                                {...register('venueLocation', { required: true })}
                                className="input w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Special Service Provider*</label>
                            <input
                                type="text"
                                placeholder="specializedServices"
                                defaultValue={specializedServices}
                                {...register('specializedServices', { required: true })}
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Healthcare Professionals in Attendance*</label>
                            <input
                                type="text"
                                placeholder="Healthcare Professionals"
                                defaultValue={healthcareProfessionals}
                                {...register('healthcareProfessionals', { required: true })}
                                className="input w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Target Audience*</label>
                            <input
                                type="text"
                                placeholder="Target Audience"
                                defaultValue={targetAudience}
                                {...register('targetAudience', { required: true })}
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Comprehensive Description</label>
                        <textarea defaultValue={description} {...register('description')} className="textarea w-full" placeholder="Description"></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Image*</label>
                        <input  {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn mb-2">
                        Update Camp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpDateCamp;