import ren from "../../assets/ren.png";
import s from "./Data.module.css";
import { Card } from "antd";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
const { Meta } = Card;

const Blog = () => {
  return (
    <div className={s.container_blog}>
      <div className={s.blog_h}>
        <h1>Feature Blog</h1>
      </div>
      <div className={s.blog_p}>
        <p>Read Latest Delicious Posts And News</p>
      </div>
      <Swiper
        loop
        speed={1500}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 370,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
        }}
        modules={[Pagination, Autoplay]}
        className={s.data_slider}
      >
        <SwiperSlide>
          <Card
            hoverable
            style={{
              width: 250,
            }}
            cover={
              <img
                alt="example"
                src="https://despina.sk-web-solutions.com/wp-content/uploads/2017/06/blog-4-359x235.jpg"
              />
            }
          >
            <Meta
              title="Make it Simple"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{
              width: 250,
              gap: 20,
            }}
            cover={
              <img
                alt="example"
                src="https://despina.sk-web-solutions.com/wp-content/uploads/2017/06/blog-4-359x235.jpg"
              />
            }
          >
            <Meta
              title="Make it Simple"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{
              width: 250,
            }}
            cover={
              <img
                alt="example"
                src="https://despina.sk-web-solutions.com/wp-content/uploads/2017/06/blog-4-359x235.jpg"
              />
            }
          >
            <Meta
              title="Make it Simple"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{
              width: 250,
            }}
            cover={
              <img
                alt="example"
                src="https://despina.sk-web-solutions.com/wp-content/uploads/2017/06/blog-4-359x235.jpg"
              />
            }
          >
            <Meta
              title="Make it Simple"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{
              width: 250,
            }}
            cover={
              <img
                alt="example"
                src="https://despina.sk-web-solutions.com/wp-content/uploads/2017/06/blog-4-359x235.jpg"
              />
            }
          >
            <Meta
              title="Make it Simple"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…"
            />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            style={{
              width: 250,
            }}
            cover={
              <img
                alt="example"
                src="https://despina.sk-web-solutions.com/wp-content/uploads/2017/06/blog-4-359x235.jpg"
              />
            }
          >
            <Meta
              title="Make it Simple"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est…"
            />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
