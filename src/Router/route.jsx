import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CampDetails from "../Pages/CampDetails/CampDetails";
import Dashbord from "../MainLayOut/Dashbord";
import RegisteredCamp from "../Pages/DashBord/RegisteredCamp/RegisteredCamp";
import AllUser from "../Pages/DashBord/AllUser/AllUser";
import OrganizerRoute from "./PrivateRoute/organizerRoute";
import AddCamp from "../Pages/DashBord/AddCamp/AddCamp";
import ManageCamp from "../Pages/DashBord/ManageCamp/ManageCamp";
import ManageRegisterCamp from "../Pages/DashBord/ManageRegisterCamps/ManageRegisterCamp";
import UpDateCamp from "../Pages/DashBord/UpdateCamp/UpDateCamp";
import OrganizerProfile from "../Pages/DashBord/OrganizerProfile/OrganizerProfile";
import PayMent from "../Pages/DashBord/PayMent/PayMent";
import ParticipentPrifile from "../Pages/DashBord/ParticipentProfile/ParticipentPrifile";
import FeedBack from "../Pages/DashBord/FeedBack/FeedBack";
import PrivateRoute from "../Router/PrivateRoute/PrivateRoute";


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
                loader: ({ params }) => fetch(`https://medical-camp-server-site.vercel.app/api/v1/all-camp/${params.id}`)
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
        element: <PrivateRoute>
            <Dashbord></Dashbord>
        </PrivateRoute>,
        children: [
            {
                path: 'participant-profile',
                element: <ParticipentPrifile></ParticipentPrifile>
            },
            {
                path: 'registered-camp',
                element: <RegisteredCamp></RegisteredCamp>
            },
            {
                path: 'payment',
                element: <PayMent></PayMent>
            },
            {
                path: 'feedback-and-ratings',
                element: <FeedBack></FeedBack>
            },

            // organiger profile
            {
                path: 'organizer-profile',
                element: <OrganizerProfile></OrganizerProfile>
            },
            {
                path: 'add-a-camp',
                element: <AddCamp></AddCamp>

            },
            {
                path: 'manage-camps',
                element: <ManageCamp></ManageCamp>
            },
            {
                path: 'manage-registered-camps',
                element: <ManageRegisterCamp></ManageRegisterCamp>
            },
            {
                path: 'update-camp/:id',
                element: <UpDateCamp></UpDateCamp>,
                loader: ({ params }) => fetch(`https://medical-camp-server-site.vercel.app/api/v1/all-camp/${params.id}`)
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