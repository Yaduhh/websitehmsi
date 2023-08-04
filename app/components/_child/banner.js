"use client";

import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = ({ baliho }) => {
  return (
    <Swiper
      rewind={true}
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000 }}
    >
      {baliho.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="relative zoom-effect rounded-3xl overflow-hidden"
        >
          <div className="mx-4 md:mx-12 w-auto overflow-hidden rounded-3xl 2xl:mx-28">
            <Image
              src={slide.images}
              alt={slide.title}
              className="rounded-3xl kotak"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
