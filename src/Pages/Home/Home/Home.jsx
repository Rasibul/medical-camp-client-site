import { Helmet } from 'react-helmet-async';
import Banner from '../Header/Banner/Banner';



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Medical Camp | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;