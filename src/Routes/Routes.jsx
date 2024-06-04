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
            // normal user routes
            {
                path: 'myApplication',
                element: <MyApplication></MyApplication>
            },

            // admin route
            {
                path: 'addScholarship',
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
            {
                path: 'manageScholarship',
                element: <AdminRoutes><ManageScholarship></ManageScholarship></AdminRoutes>
            },
            {
                path: 'updateScholarship/:id',
                element: <AdminRoutes><UpdateScholarship></UpdateScholarship></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5001/allScholarship/${params.id}`)
            },
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
        ]
    }
]);