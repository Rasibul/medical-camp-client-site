import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react';


const Testimonial = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        // <section>
        //      <SectionTitle
        //         subHeading={"What Our Client Say"}
        //         heading={"Testimonihal"}>
        //     </SectionTitle>
        //     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        //         {
        //             reviews.map(review => <SwiperSlide key={review._id}>
        //                 <div className="flex flex-col items-center mx-24 my-12">
        //                     {/* <FaQuoteLeft className="text-6xl"></FaQuoteLeft> */}
        //                     <Rating className="py-4"
        //                         style={{ maxWidth: 180 }}
        //                         value={review.rating}
        //                     />
        //                     <p className="py-8">{review.feedback}</p>
        //                     <h2 className="text-2xl text-orange-500">{review.camp_name}</h2>
        //                     <h2 className="text-2xl text-orange-500">{review.date}</h2>
        //                 </div>
        //             </SwiperSlide>)
        //         }
        //     </Swiper>
        // </section>
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonial"}
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 my-4 sm:my-8 md:my-12 lg:my-16 xl:my-24">
                            {/* ... */}
                            <Rating className="py-4"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                            />
                            <p className="py-4 sm:py-6 md:py-8">{review.feedback}</p>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-orange-500">{review.camp_name}</h2>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-orange-500">{review.date}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;