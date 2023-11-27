import { Helmet } from 'react-helmet-async';
import Banner from '../Header/Banner/Banner';
import PopularCamp from '../PopularCamp/PopularCamp';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Medical Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;