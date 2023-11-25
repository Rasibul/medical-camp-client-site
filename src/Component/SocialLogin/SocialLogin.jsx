import { FaGooglePlus } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const handelGoogleLogin = (media) => {
        media()
            .then((res) => {
                console.log(res.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Create Sucessfully",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/')
            })
            .catch(error => console.log(error))

    }
    return (
        <>
            <div className="divider font-bold">Continue with</div>
            <div className="flex items-center justify-center ">
                <button
                    onClick={() => handelGoogleLogin(googleLogin)}
                    className="btn btn-sm btn-warning">Google
                    <FaGooglePlus></FaGooglePlus>
                </button>

            </div>
        </>
    );
};

export default SocialLogin;