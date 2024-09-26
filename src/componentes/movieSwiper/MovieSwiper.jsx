import React from 'react';
import "./movieSwiper.css";
// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function MovieSwiper({slide, changeBack}) {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideshadows: true,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        className="movieSwiper"
    >
        
            {slide.map(item => (
                <SwiperSlide key={item.id}>
                    <img src={item.poster} alt='preview image' onClick={() => changeBack(item.id)} />
                </SwiperSlide>
            ))}
            
    </Swiper>
  )
}

export default MovieSwiper