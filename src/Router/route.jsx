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
import RegisteredCamp from "../Pages/DashBord/RegisteredCamp/RegisteredCamp";
import AllUser from "../Pages/DashBord/AllUser/AllUser";
import OrganizerRoute from "./PrivateRoute/organizerRoute";
import AddCamp from "../Pages/DashBord/AddCamp/AddCamp";
import ManageCamp from "../Pages/DashBord/ManageCamp/ManageCamp";


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
    // dashbord
    {
        path: 'dashboard',
        element: <OrganizerRoute>
            <Dashbord></Dashbord>
        </OrganizerRoute>,
        children: [
            {
                path: 'registered-camp',
                element: <RegisteredCamp></RegisteredCamp>
            },

            // organiger profile
            {
                path: 'add-a-camp',
                element: <OrganizerRoute>
                    <AddCamp></AddCamp>
                </OrganizerRoute>
            },
            {
                path:'manage-camps',
                element:<ManageCamp></ManageCamp>
            },
            {
                path: 'users',
                element: <OrganizerRoute>
                    <AllUser></AllUser>
                </OrganizerRoute>
            }
        ]
    }
])
export default route;