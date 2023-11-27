import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-yellow-500 text-white">
            <div className="text-center">
                <h2 className="text-6xl font-bold mb-4">Oops!</h2>
                <p className="text-lg mb-8">{"Something went wrong. This page doesn't exist."}</p>
                <Link to="/">
                    <button  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-full text-lg">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;