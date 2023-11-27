
import { Link, useLoaderData } from "react-router-dom";



const CampDetails = () => {
    // const {id} = useParams()
    // const [campDetails, setCampDetails] = useState({});
    // console.log(campDetails)
    const campDetails = useLoaderData()
    console.log(campDetails)

    return (
        <div>
            <div className="card card-compact  shadow-xl">
                <img src={campDetails.image} alt="" />
                <div className="p-4 font-bold">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-2">{campDetails.campName}</h2>
                    <p className="text-sm text-gray-600 mb-2">Camp Fee: ${campDetails.campFees}</p>
                    <p className="text-sm text-gray-600 mb-2">Time: {campDetails.scheduledDateTime}</p>
                    <p className="text-sm text-gray-600 mb-2">Venue: {campDetails.venueLocation}</p>
                    <p className="text-sm text-gray-600 mb-2">Services: {campDetails.specializedServices.join(', ')}</p>
                    <p className="text-sm text-gray-600 mb-4">Description: {campDetails.description}</p>
                    <div className="flex justify-between items-center">
                        <Link to='/join'>
                            <button className="bg-blue-500 btn-block text-white px-4 py-2 rounded-md hover:bg-blue-700">Join Now</button>
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CampDetails;