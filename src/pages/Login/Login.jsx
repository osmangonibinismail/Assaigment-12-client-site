import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"


const Login = () => {


    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div>
            <Helmet>
                <title>OAI || Log in</title>
            </Helmet>
            {/*  */}
            <div className="hero min-h-screen bg-gray-300">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/GkTjR5P/login.png" alt="" />
                    </div>
                    {/* <form onSubmit={handleSubmit(onSubmit)} */}
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-auto">
                        <form onSubmit={handleLogin}  className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Log in" />
                            </div>
                        </form>
                        <div className='text-center mt-2 mb-5 px-4'>
                            <p>New here? create an account Please<Link to="/register"><p className='font-semibold text-orange-600'>Register</p></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
