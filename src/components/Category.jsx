import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import SectionTitlel from './SectionTitlel';



const Category = () => {
    return (
        <div>
          <SectionTitlel 
          
          subHeading={'From 11.00 am to 11.00 pm'}
          Heading={'Order Online'}
          
          >

          </SectionTitlel>
              <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-9"
      >
        <SwiperSlide><img src={slide1} alt='image'/> <h3 className='text-white -mt-16 text-center uppercase'>salad</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='image'/><h3 className='text-white -mt-16 text-center uppercase'>pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt='image'/><h3 className='text-white -mt-16 text-center uppercase'>soups</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt='image'/><h3 className='text-white -mt-16 text-center uppercase'>desserts</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt='image'/><h3 className='text-white -mt-16 text-center uppercase'>salad</h3></SwiperSlide>
    
      </Swiper>
            
        </div>
    );
};

export default Category;