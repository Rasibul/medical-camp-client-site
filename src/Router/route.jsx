import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CampDetails from "../Pages/CampDetails/CampDetails";
import Dashbord from "../MainLayOut/Dashbord";
import AdminHome from "../Pages/DashBord/AdminHome/AdminHome";


const route = createBrowserRouter([
    {
        path: '',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'availableCamps',
                element: <PrivateRoute>
                    <AvailableCamps></AvailableCamps>
                </PrivateRoute>
            },
            {
                path: 'camp-details/:id',
                element: <PrivateRoute>
                    <CampDetails></CampDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/all-camp/${params.id}`)
            },
            {
                path: 'contactUs',
                element: <ContactUs></ContactUs>
            }
        ]
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
        path:'dashbord',
        element:<Dashbord></Dashbord>,
        children:[
            {
                path:'adminHome',
                element:<AdminHome></AdminHome>
            }
        ]
    }
])
export default route;