import { FaHome, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
    return (
        // <div className="flex">
        //     <div className="w-64 min-h-screen bg-gradient-to-b from-purple-500 to-pink-500 text-white">

        //     </div>
        //     <div className="flex-1 p-4">
        //         <Outlet></Outlet>
        //     </div>
        // </div>
        <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            {/* Sidebar */}
            <div className="lg:w-1/4 bg-purple-700 p-4">
                <h1 className="text-2xl font-bold text-white mb-4">Dashboard</h1>
                <ul className="menu">
                    <li>
                        <NavLink to='/dashboard/adminHome'>
                            <FaHome></FaHome>
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/add-a-camp'>
                            <FaUtensils></FaUtensils>
                            Add Items
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