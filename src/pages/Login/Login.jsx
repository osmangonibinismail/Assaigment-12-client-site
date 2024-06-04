import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Swal from "sweetalert2"
import SocialLogin from "../../components/SocialLogin/SocialLogin"


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Log in successful.",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
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
                        <form onSubmit={handleLogin} className="card-body">
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
                        <SocialLogin></SocialLogin>
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
