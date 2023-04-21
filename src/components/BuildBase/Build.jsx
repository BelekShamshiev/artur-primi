import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Parallax } from "swiper";
import cacao_cup from "../../assets/cacao_cup.png";
import coffe_cup from "../../assets/coffe_cup.png";
import paper from "../../assets/paper.png";
import paper_bag from "../../assets/paber_bag.png";
// import coffee_put from "../../assets/coffee_put.png";
import s from "./Build.module.css";
const Build = () => {
  return (
    <div className={s.container}>
      <div className={s.build_title}>
        <h1>Coffee Build Your Base</h1>
        <p>What Happens Here</p>
      </div>
      <Swiper
       loop
       speed={2000}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination,Parallax,Autoplay]}
        className={s.swiper}
      >
        <SwiperSlide>
          <img className={s.swiper_img} src={cacao_cup} alt="cacao_cup" />
          
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={coffe_cup} alt="coffe_cup" />
          
          <div className={s.swiper_title}>
            <p></p>
          </div>
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={paper} alt="paper" />
          
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={paper_bag} alt="paper_bag" />
          
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={cacao_cup} alt="cacao_cup" />
          
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={coffe_cup} alt="coffee_cup" />
          
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={paper} alt="paper" />
          
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={paper_bag} alt="paper_bag" />
          
          <div class="wrapper">
            <a className={s.swiper_btn} href="#">
              <span>read more</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Build;
