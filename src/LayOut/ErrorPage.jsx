import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"


const ErrorPage = () => {
    return (
        <div className="mx-auto">
            <Helmet>
                <title>OAI || Error Page</title>
            </Helmet>
            <figure className="px-28">
                <img width="600" height="600" src='https://i.ibb.co/1GFVMbp/404.gif' alt="" />
            </figure>
            <div className=" items-center text-center">
                <Link to="/"><button className="text-center font-semibold mb-20 btn btn-success">Go back to home</button></Link>
            </div>
        </div>
    )
}

export default ErrorPage
