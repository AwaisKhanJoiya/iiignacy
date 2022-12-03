import React from "react";
import { useState } from "react";
import TestData from "./TestimonialApi";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const [text, setText] = useState(TestData);
  return (
    <div className="testimonial">
      <Swiper
        className="swiper"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {text.map((curData) => {
          const { id, review, span } = curData;
          return (
            <SwiperSlide className="text_swiper" key={id}>
              <p>{review}</p>
              <span>{span}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
