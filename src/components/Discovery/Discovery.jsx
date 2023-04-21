import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import s from './Discovery.module.css'
import LokBlock from '../Coffee/Coffee';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
export default function App() {
  return (
	
    <>
	    <div className={s.container}>
    <div className={s.discovery_section}>
      <h1>Discover Menu</h1>
      <h2>What Happens Here</h2>
   
      <Swiper
	  grabCursor
	        loop
			speed={1500}
			autoplay={{
			 delay: 1000,
			 disableOnInteraction: false,
		   }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        className={s.discovery_swiper}
      >
        <SwiperSlide>
		<div className={s.discovery_section__block}>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
      </div>
		</SwiperSlide>
        <SwiperSlide>
		<div className={s.discovery_section__block}>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
      </div>
		</SwiperSlide>
        <SwiperSlide>
		<div className={s.discovery_section__block}>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
      </div>
		</SwiperSlide>
        <SwiperSlide>
		<div className={s.discovery_section__block}>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
        <LokBlock/>
      </div>
		</SwiperSlide>
      </Swiper> 
	    </div>
    </div>
    </>
  );
}
