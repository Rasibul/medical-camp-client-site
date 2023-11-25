import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Header/NavBar/NavBar";
import Footer from "../Pages/Home/Footer/Footer";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;