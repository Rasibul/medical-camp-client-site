import { Helmet } from 'react-helmet-async';
import Banner from '../Header/Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Testimonial from '../Testimonial/Testimonial';
import AboutUs from '../../../Component/AboutUs/AboutUs';
import VolunterPage from '../../../Component/VolunterPage/VolunterPage';



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Medical Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <AboutUs></AboutUs>
            <Testimonial></Testimonial>
            <VolunterPage></VolunterPage>
        </div>
    );
};

export default Home;