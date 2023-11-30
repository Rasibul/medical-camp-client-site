import { Link } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";
import useOrganizer from "../../../../Hook/useOrganizer";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isOrganizer] = useOrganizer()
    const navOptions = <>
        <li><Link to=''>Home</Link></li>
        <li><Link to='availableCamps'>Available Camps</Link></li>
        <li><Link to='contactUs'>Contact Us</Link></li>

        {
            user && isOrganizer && <li><Link to="/dashboard/organizer-profile">Dashboard</Link></li>
        }
        {
            user && !isOrganizer && <li><Link to="/dashboard/participant-profile
            ">Dashboard</Link></li>
        }
    </>

    return (
        <div className="navbar    bg-yellow-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex items-center  ">
                    <img className="w-12 sm:w-10 rounded-full" src="https://i.ibb.co/nj4JXDP/logo.png" alt="" />
                    <h2 className="font-bold italic text-center">Medico</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost" onClick={logOut}>Logout</button>
                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;