import { FaGooglePlus } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handelGoogleLogin = (media) => {
        media()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/api/v1/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // console.log(res.data)
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Create Sucessfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                navigate('/')
            })
            // .catch(error => console.log(error))
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