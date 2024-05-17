import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Service.css";
import { sliderSettingss } from "../../utils/common";
import data from "../../utils/accordion";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  return (
    <div id="service" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColCenter r-head">
          <span className="primaryText">MoozaCash Services</span>
     
        <br/>
        </div>
        <Swiper {...sliderSettingss}>
          <SlideNextButton />
          {data.slice(0, 8).map((data, i) => (
            <SwiperSlide key={i}>
              <ServiceCard card={data}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Service;

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className="r-prevButton">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="r-nextButton">
          &gt;
        </button>
      </div>
    );
  };
