import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="text-center max-w-[1300px] mx-auto">
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/Ss3vVq7/Banner-1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/1rTj6FZ/Banner-2.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/cr7wm1K/Banner-3.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;