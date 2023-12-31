import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const handelLogin = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value

        signIn(email, password)
        .then(() => {
            // console.log(res.user)
            navigate(location?.state ? location.state : '/');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login Sucessfully",
                showConfirmButton: false,
                timer: 1500
            });

        })
        // .catch(error => console.log(error))
    }
    return (
        <div className="hero  ">
            <Helmet>
                <title> Medical Camp | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="">
                    <img src="https://i.ibb.co/2ccw40X/authentication.gif" alt="" />
                </div>
                <div className="card w-full max-w-sm ">
                    <h2 className='text-4xl text-center font-bold'>Please Login </h2>
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Login" />
                        </div>
                        <label className="label font-bold">
                            New here? <Link to="/register" className="label-text-alt link link-hover font-bold">Create an account</Link>
                        </label>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;