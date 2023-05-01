/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

const CarouselImage = ({ destinations, handelId }) => {
   return (
      <Swiper
         navigation={true}
         modules={[Navigation, Pagination]}
         spaceBetween={5}
         centeredSlides={true}
         loop={true}
         slidesPerView={2}
         onSlideChange={() => console.log("active")}
         pagination={{
            clickable: true,
         }}
         className="mySwiper"
      >
         {destinations.map((destination) => {
            return (
               <SwiperSlide key={destination.id}>
                  {({ isActive }) => (
                     <div className="position-relative">
                        {isActive && handelId(destination.id)}{" "}
                        <img
                           src={destination.image}
                           alt=""
                           style={{ height: "416px", width: "270px" }}
                           className={`${
                              isActive ? "border border-3 border-warning" : "not active opacity-75"
                           } rounded-3`}
                        />{" "}
                        <h3 className="position-absolute bottom-0 end-50 text-center">{destination.name}</h3>
                     </div>
                  )}
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default CarouselImage;
