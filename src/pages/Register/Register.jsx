import { useContext } from "react";
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Register = () => {
    
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div>
            <Helmet>
                <title>OAI || Register</title>
            </Helmet>
            {/*  */}
            <div className="hero min-h-screen bg-gray-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/dPTTc24/register.png" alt="" />
                    </div>
                    {/* <form onSubmit={handleSubmit(onSubmit)} */}
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                })} placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500 text-center">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-500 text-center">Password must be less then 20 characters</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <div className='text-center mt-2 mb-5 px-4'>
                            <p>Already have an account? please <Link to="/login"><p className='font-semibold text-orange-600'>Log in</p></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
