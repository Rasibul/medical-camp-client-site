import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const route = createBrowserRouter([
    {
        path: '',
        element: <MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'availableCamps',
                element: <AvailableCamps></AvailableCamps>
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
    }
])
export default route;