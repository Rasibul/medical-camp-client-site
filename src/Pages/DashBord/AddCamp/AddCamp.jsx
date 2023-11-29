import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddCamp = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
    }
    return (
        <div>
            <Helmet>
                <title> Medical Camp | Dashbord | AddCamp</title>
            </Helmet>
            <h2 className="text-4xl text-center mb-4">ADD A CAMP</h2>
            <div className="ml-8 mb-4 bg-red-400 border rounded-lg p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Camp Name*</label>
                        <input
                            type="text"
                            placeholder="Camp Name"
                            {...register('name', { required: true })}
                            required
                            className="input w-full"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Schedule Date and Time*</label>
                            <input
                                type="text"
                                placeholder="Date and Time"
                                {...register('dateTime', { required: true })}
                                className="input w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Camp Fees*</label>
                            <input
                                type="number"
                                placeholder="Fees"
                                {...register('price', { required: true })}
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Venue*</label>
                            <input
                                type="text"
                                placeholder="Venue"
                                {...register('venue', { required: true })}
                                className="input w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Special Service Provider*</label>
                            <input
                                type="text"
                                placeholder="Service"
                                {...register('serviceProvider', { required: true })}
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
                                {...register('healthcareProfessionals', { required: true })}
                                className="input w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-bold mb-2">Target Audience*</label>
                            <input
                                type="text"
                                placeholder="Target Audience"
                                {...register('targetAudience', { required: true })}
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Comprehensive Description</label>
                        <textarea {...register('description')} className="textarea w-full" placeholder="Description"></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-bold mb-2">Image*</label>
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn mb-2">
                        Add Camp 
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddCamp;