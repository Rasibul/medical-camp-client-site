import { Link } from "react-router-dom";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import usePopularCamp from "../../Hook/usePopularCamp";

const AvailableCamps = () => {
    const [popularCamp] = usePopularCamp()
    return (
        <section>
            <SectionTitle
                subHeading={"All camps"}
                heading={"Available Camps"}
            ></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularCamp.map(camp => (
                    <div key={camp._id} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
                        <img className="w-full h-48 object-cover rounded-t-xl" src={camp.image} alt="Camp Image" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{camp.campName}</h2>
                            <p className="text-sm text-gray-600 mb-2">Camp Fee: ${camp.campFees}</p>
                            <p className="text-sm text-gray-600 mb-2">Time: {camp.scheduledDateTime}</p>
                            <p className="text-sm text-gray-600 mb-2">Venue: {camp.venueLocation}</p>
                            <p className="text-sm text-gray-600 mb-2">Services: {camp.specializedServices.join(', ')}</p>
                            <p className="text-sm text-gray-600 mb-4">Description: {camp.description}</p>
                            <div className="flex justify-between items-center">
                                <Link to='/join'>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Join</button>
                                </Link>
                                <Link to={`/camp-details/${camp._id}`}>
                                    <button className="text-blue-500 hover:underline">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default AvailableCamps;
