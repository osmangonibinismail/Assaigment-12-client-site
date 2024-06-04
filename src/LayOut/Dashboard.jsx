import { Helmet } from "react-helmet-async"
import { FaHome, FaListAlt, FaSearch, FaUsers, FaVoicemail } from "react-icons/fa"
import { MdEmail, MdManageHistory, MdOutlineCastForEducation, MdOutlineManageSearch, MdRateReview } from "react-icons/md"
import { NavLink, Outlet } from "react-router-dom"
import useCart from "../Hooks/useCart"
import { IoIosAddCircle } from "react-icons/io"
import { CgProfile } from "react-icons/cg"


const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;

    return (
        <>
            <Helmet>
                <title>OAI || Dashboard</title>
            </Helmet>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-72 min-h-full bg-lime-200">
                    <ul className="menu p-4">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to="/dashboard/myProfile">
                                        <CgProfile className="text-xl"/> My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myProfile">
                                        <IoIosAddCircle className="text-xl" />Add Scholarship</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myProfile">
                                        <MdManageHistory className="text-xl"/>Manage Scholarship.</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myApplication">
                                        <MdOutlineManageSearch className="text-xl" />Manage Applied Application ({cart.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                        <FaUsers className="text-xl" />Manage Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                            <MdRateReview  className="text-xl"/>Manage Review</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/myProfile">
                                        <CgProfile className="text-xl"/> My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myApplication">
                                            <FaListAlt  className="text-xl"/> My Application ({cart.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                            <MdRateReview className="text-xl" /> My Review</NavLink>
                                    </li>
                                </>
                        }
                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome className="text-xl"></FaHome>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allScholarship">
                                <FaSearch className="text-xl"/>All Scholarship</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allScholarship">
                                <MdEmail className="text-xl" />Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default Dashboard
