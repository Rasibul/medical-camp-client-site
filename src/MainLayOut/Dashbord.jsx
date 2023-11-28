import { FaCartPlus, FaCashRegister, FaGrinStars, FaHistory, FaHome, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen ">
            {/* Sidebar */}
            <div className="lg:w-1/4 bg-red-700 p-4 text-white">
                <h1 className="text-2xl font-bold text-white mb-4">Dashboard</h1>
                <ul className="menu">
                    <li>
                        <NavLink to='/dashboard/participant-profile'>
                            <FaHome></FaHome>
                            Participant Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/registered-camp'>
                            <FaCashRegister />
                            Register Camp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment-history'>
                            <FaHistory />
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/feedback-and-ratings'>
                            <FaGrinStars />
                            Feed Back
                        </NavLink>
                    </li>
                    <div className="divider bg-white"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/availableCamps'>
                            <FaCartPlus></FaCartPlus>
                            Available Camp
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 p-4">
                {/* Add main content components */}
                <h2 className="text-3xl font-bold text-white mb-4">Welcome to Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashbord;