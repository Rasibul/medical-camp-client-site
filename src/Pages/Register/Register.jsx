import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="hero  ">
            <Helmet>
                <title>Medical Camp | Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="">
                    <img src="https://i.ibb.co/2ccw40X/authentication.gif" alt="" />
                </div>
                <div className="card w-full max-w-sm ">
                    <h2 className='text-4xl text-center font-bold'>Please Sign Up </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name="name" {...register("name")} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" {...register("email")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Photo Url" name="photo" {...register("photoURL")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", {
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                            })} name="password" className="input input-bordered" required />
                            {errors.password?.type === 'pattern' && <p className='text-red-500'>password must have one number,one uppercase,onelowercase, special character and than 6 characters</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                        <h2 className="text-sm font-bold">
                            Alredy Have An Account? <Link to="/login" className="label-text-alt link link-hover text-sm font-bold">Please Login</Link>
                        </h2>
                        {/* <SocialLogin></SocialLogin> */}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;