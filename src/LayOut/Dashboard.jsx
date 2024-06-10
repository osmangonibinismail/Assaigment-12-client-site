import { Helmet } from "react-helmet-async"
import { FaHome, FaListAlt, FaSearch, FaUsers } from "react-icons/fa"
import { MdEmail, MdOutlineManageSearch, MdRateReview } from "react-icons/md"
import { NavLink, Navigate, Outlet } from "react-router-dom"
import useCart from "../Hooks/useCart"
import { IoIosAddCircle } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { SiManageiq } from "react-icons/si"
import useAdmin from "../Hooks/useAdmin"
import { useEffect, useState } from "react"
import useAuth from "../Hooks/useAuth"
import useModarator from "../Hooks/useModarator"


const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    const {user} = useAuth();
    const [isModarator] = useModarator();
    // console.log(isModarator);
    const [allScholarshipCart, setAllScholarshipCart] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5001/scholarshipCart`)
            .then(res => res.json())
            .then(data => {
                setAllScholarshipCart(data)
            });
    }, [])

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
                                        <NavLink to="/dashboard/adminProfile">
                                            <CgProfile className="text-xl" /> Admin Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addScholarship">
                                            <IoIosAddCircle className="text-xl" />Add Scholarship</NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink to="/dashboard/manageAllApplied">
                                            <IoIosAddCircle className="text-xl" />Scholarship cart</NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink to="/dashboard/manageScholarship">
                                            <SiManageiq className="text-xl" />Manage Scholarship</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageAllApplied">
                                            <MdOutlineManageSearch className="text-2xl" />All Applied Scholarship ({cart.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allUsers">
                                            <FaUsers className="text-xl" />Manage Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                            <MdRateReview className="text-xl" />Manage Review</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <CgProfile className="text-xl" /> My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myApplication">
                                            <FaListAlt className="text-xl" /> My Application ({cart.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                            <MdRateReview className="text-xl" /> My Review</NavLink>
                                    </li>
                                </> 
                                
                                
                        }
                        {
                           isModarator &&
                           <>
                                    <li>
                                        <NavLink to="/dashboard/modaratorProfile">
                                            <CgProfile className="text-xl" /> Modarator Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addScholarship">
                                            <IoIosAddCircle className="text-xl" />Add Scholarship</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageScholarship">
                                            <SiManageiq className="text-xl" />Manage Scholarship</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageAllApplied">
                                            <MdOutlineManageSearch className="text-2xl" />All Applied Scholarship ({cart.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                            <MdRateReview className="text-xl" />Manage All Review</NavLink>
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
                                <FaSearch className="text-xl" />All Scholarship</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactUs">
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
