import React, { useEffect, useState } from 'react';
import './trend.css';
// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TrendCard from '../../componentes/trendCard/TrendCard';

function Trend() {

    const [slide, setSlide] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:4000/films")
        .then(res => res.json())
        .then(data => setSlide(data))
        .catch(error => console.log("Error fetching data:", error));
      }
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <section id='trend' className='trend'>
        <div className="container-fluid">
          <div className="row">
            <h4 className='section-title'>Coming Soon</h4>
          </div>
          <div className="row">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                400: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className='trendSwiper'
            >
              {slide &&
                slide.length > 0 &&
                slide.map(slide => (
                  <SwiperSlide key={slide.id}>
                    <TrendCard slide={slide}/>
                  </SwiperSlide>
                )
              )
              }
            </Swiper>
          </div>
        </div>
    </section>
  )
}

export default Trend