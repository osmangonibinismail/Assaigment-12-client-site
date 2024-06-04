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
                path: '/allScholarship',
                element: <AllScholarship></AllScholarship>
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
                path: '/scholarshipCartDetails',
                element: <ScholarshipCartDetails></ScholarshipCartDetails>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myApplication',
                element: <MyApplication></MyApplication>
            },

            // admin route
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);