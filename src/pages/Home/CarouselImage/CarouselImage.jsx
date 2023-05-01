/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "react-bootstrap";

const CarouselImage = ({ destinations, handelId }) => {
   const [swiperRef, setSwiperRef] = useState(null);

   const prevHandler = () => {
      swiperRef.slidePrev();
   };

   const nextHandler = () => {
      swiperRef.slideNext();
   };

   return (
      <div>
         <Swiper
            modules={[Pagination]}
            spaceBetween={5}
            centeredSlides={true}
            loop={true}
            slidesPerView={2}
            onSlideChange={() => console.log("e")}
            pagination={{
               clickable: true,
            }}
            onSwiper={(swiper) => {
               setSwiperRef(swiper);
               console.log(swiper);
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
                                 isActive ? "border border-4 border-warning" : "not active opacity-75"
                              } rounded-5`}
                           />{" "}
                           <h1 className="position-absolute mb-5 mx-auto bottom-0 end-50 text-center">
                              {destination.name}
                           </h1>
                        </div>
                     )}
                  </SwiperSlide>
               );
            })}
         </Swiper>
         <div className="my-5 d-flex gap-3 ">
            <Button variant="light" className="rounded-circle p-2" onClick={prevHandler}>
               <FaArrowLeft></FaArrowLeft>
            </Button>
            <Button variant="light" className="rounded-circle p-2" onClick={nextHandler}>
               <FaArrowRight></FaArrowRight>
            </Button>
         </div>
      </div>
   );
};

export default CarouselImage;
