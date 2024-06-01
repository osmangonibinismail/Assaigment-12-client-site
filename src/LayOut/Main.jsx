import { Outlet } from "react-router-dom"
import Footer from "../pages/shared/Footer/Footer"
import Navbar from "../pages/shared/Navbar/Navbar"


const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main
