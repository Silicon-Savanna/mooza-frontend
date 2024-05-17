import "./SendMoney.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/accordions";
import ServiceCards from "../ServiceCard/ServiceCards";


const SendMoney = () => {

  return (
    <>
      <div id="send-money" className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="flexColCenter r-head">
            <span className="primaryText">Ways To Send Money</span>
          </div>
          <Swiper {...sliderSettings}>
            {data.slice(0, 8).map((data, i) => (
              <SwiperSlide key={i}>
                <ServiceCards card={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SendMoney;
