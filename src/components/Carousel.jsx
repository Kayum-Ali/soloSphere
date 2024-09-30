
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import bgImg1 from '../assets/images/carousel1.jpg'
import bgImg2 from '../assets/images/carousel2.jpg'
import bgImg3 from '../assets/images/carousel3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Carousel=()=> {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={bgImg1} text={'Get your web development projects done in minutes'}></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgImg2} text={'Get your Graphics Design projects done in minutes'}></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide  image={bgImg3} text={'Start your Digital Markting Compain up in running'}></Slide>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Carousel;