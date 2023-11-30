import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <div className="flex items-center  ">
                    <img className="w-12 sm:w-10 rounded-full" src="https://i.ibb.co/nj4JXDP/logo.png" alt="" />
                    <h2 className="font-bold italic text-center">MEDICO</h2>
                </div>
                <p>MEDICO Camps Ltd.<br />Helpful And Coo-operative Camp we are provide</p>
            </aside>
            <nav>
                <header className="footer-title">NavLinks</header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='availableCamps'>Available Camps</Link></li>
                    <li><Link to='contactUs'>Contact Us</Link></li>
                </div>
            </nav>
            <div className="">
                <h2>Contact Us: 4455886623</h2>
                <p>BayZid Chittagong</p>
            </div>
        </footer>
    );
};

export default Footer;