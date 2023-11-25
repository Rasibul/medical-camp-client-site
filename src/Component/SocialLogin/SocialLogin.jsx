import { FaGooglePlus } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <>
        <div className="divider font-bold">Continue with</div>
        <div className="flex items-center justify-center ">
            <button
                
                className="btn btn-sm btn-warning">Google
                <FaGooglePlus></FaGooglePlus>
            </button>

        </div>
    </>
    );
};

export default SocialLogin;