import s from "./Hero.module.css";
import coffe from "../../assets/coffee.png";
import milk from "../../assets/milk.png";
import coctail from "../../assets/cocktail.png";
import bewerages from "../../assets/bewerages.png";
import tea from "../../assets/tea.png";
import cake from "../../assets/cake.png";
import bob from "../../assets/bob.png";
import drink from "../../assets/drink.png";
import phone from "../../assets/phone.png";
import basket from "../../assets/basket.png";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.low_container}>
        <div className={s.low}>


       <Swiper
        loop
        speed={2500}

         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        // spaceBetween={10}
        grabCursor={true}

        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            // spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 4,
            // spaceBetween:10 ,
          },
          "@1.50": {
            slidesPerView: 5,
            // spaceBetween: 10,
          },
        }}
        className={s.hero_swiper}
        modules={[Autoplay]}
      >
        <SwiperSlide>
        <img className={s.coffe} src={coffe} alt="coffe"></img> <p>Coffe</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={milk} alt="milk" /> <p>Milk</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={coctail} alt="coctail" /> <p>Coctail</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={bewerages} alt="bewerages" /> <p>Bewerages</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={tea} alt="tea" /> <p>Tea</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={cake} alt="cake" /> <p>Cake</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={coffe} alt="coffe"></img> <p>Coffe</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={milk} alt="milk" /> <p>Milk</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={coctail} alt="coctail" /> <p>Coctail</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={bewerages} alt="bewerages" /> <p>Bewerages</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={tea} alt="tea" /> <p>Tea</p>
        </SwiperSlide>
        <SwiperSlide>
        <img className={s.coffe} src={cake} alt="cake" /> <p>Cake</p>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>

      <div className={s.best}>
        <div className={s.bob}>
        <img className={s.bob_picture} src={bob} alt="bob" />
        </div>
        <hr className={s.line} />
        <div className={s.title}>
          <h1 className={s.title_text}>BEST QUALITY</h1>
          <p className={s.title_date}>ESTABLISHED IN 1991</p>
          <h1 className={s.title_special}>SPECIAL COFFEE</h1>
          <p className={s.title_beans}>BEANS</p>
        </div>
        <div className={s.main}></div>
        <hr />
        <div className={s.drink}>
        <img className={s.drink_picture} src={drink} alt="asdasd" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
