import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider";
import "swiper/css";
import "./residencies.css";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <>
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
            <SliderButtons/>
          {data.map((datum, i) => (
              <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={datum.image} alt="Home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{datum.price}</span>
                </span>
                <span className="primaryText">{datum.name}</span>
                <span className="secondaryText">{datum.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
        </>
  );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}
