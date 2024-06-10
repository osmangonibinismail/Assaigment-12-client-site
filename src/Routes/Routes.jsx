import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllScholarship from "../pages/AllSchoolarship/AllScholarship";
import ErrorPage from "../LayOut/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ScholarshipCartDetails from "../pages/AllSchoolarship/ScholarshipCartDetails";
import Dashboard from "../LayOut/Dashboard";
import Secret from "../pages/Secret/Secret";
import MyApplication from "../pages/DashBoard/MyApplication/MyApplication";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageScholarship from "../pages/DashBoard/ManageScholarship/ManageScholarship";
import UpdateScholarship from "../pages/DashBoard/UpdateScholarship/UpdateScholarship";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import UserProfile from "../pages/DashBoard/UserProfile/UserProfile";
import AdminProfile from "../pages/DashBoard/AdminProfile/AdminProfile";
import Payment from "../pages/DashBoard/Payment/Payment";
import ApplicationForm from "../pages/AllSchoolarship/ApplicationForm";
import AddReviewUser from "../pages/DashBoard/MyApplication/AddReviewUser";
import ManageAllApplied from "../pages/DashBoard/ManageAllApplied/ManageAllApplied";
import ModaratorProfile from "../pages/DashBoard/ModaratorProfile/ModaratorProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/allScholarship',
                element: <AllScholarship></AllScholarship>,
                loader: () => fetch('http://localhost:5001/allScholarship')
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/scholarshipCartDetails/:id',
                element: <PrivateRoute><ScholarshipCartDetails></ScholarshipCartDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/allScholarship/${params.id}`)
            },
            {
                path: '/applicationForm/:id',
                element: <PrivateRoute><ApplicationForm></ApplicationForm></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/allScholarship/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: 'userHome',
                element: <UserProfile></UserProfile>
              },
            {
                path: 'myApplication',
                element: <MyApplication></MyApplication>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
            },
            // {
            //     path: 'addReview/:id',
            //     element: <AddReviewUser></AddReviewUser>,
            //     loader: ({params}) => fetch(`http://localhost:5001/scholarshipCart/${params.id}`)
            // },

            // admin route
            {
                path: 'adminProfile',
                element: <AdminRoutes><AdminProfile></AdminProfile></AdminRoutes>
            },
            {
                path: 'addScholarship',
                element: <AddItem></AddItem>
            },
            {
                path: 'manageScholarship',
                element: <ManageScholarship></ManageScholarship>
            },
            {
                path: 'updateScholarship/:id',
                element: <UpdateScholarship></UpdateScholarship>,
                loader: ({params}) => fetch(`http://localhost:5001/allScholarship/${params.id}`)
            },
            {
                path: 'manageAllApplied',
                element: <ManageAllApplied></ManageAllApplied>
            },
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            // modarator profile
            {
                path: 'modaratorProfile',
                element: <ModaratorProfile></ModaratorProfile>
            }
            

        ]
    }
]);