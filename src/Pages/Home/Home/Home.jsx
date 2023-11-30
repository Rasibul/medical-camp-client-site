import { Helmet } from 'react-helmet-async';
import Banner from '../Header/Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Testimonial from '../Testimonial/Testimonial';
import AboutUs from '../../../Component/AboutUs/AboutUs';



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
        </div>
    );
};

export default Home;