import SectionTitlel from "./SectionTitlel";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [review, setReview] = useState([])

    useEffect( ()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data=> setReview(data))
    },[])
    return (
        <div>
            <section>
                <SectionTitlel subHeading={'What Our Clients Say'} Heading={'Testimonials'}/>
            </section>

            <div className="my-20">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        

        {
            review.map(review=> <SwiperSlide key={review._id}>
                <div>
                <Rating
                className="mx-auto my-7"
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />
                    <p className="text-center px-9 ">{review.details}</p>
                    <h1 className="text-2xl mt-4 text-orange-500 text-center">{review.name}</h1>
                </div>
            </SwiperSlide> )
        }
     
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;