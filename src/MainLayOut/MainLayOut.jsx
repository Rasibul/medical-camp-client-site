import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Header/NavBar/NavBar";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;