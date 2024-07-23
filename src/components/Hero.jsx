// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/Styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//media
import hero1 from '../media/hero1.jpg';


export default function Hero(){

    return (

        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={hero1} alt="" />
          </SwiperSlide>

          <SwiperSlide>Slide 2

          </SwiperSlide>

          <SwiperSlide>Slide 3

          </SwiperSlide>
          
        </Swiper>
      </>


    )
}