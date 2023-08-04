"use client";

import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Bgprofile from "@/public/assets/images/backgroundprofile.png";

const SwiperComponent = ({ slides }) => {
  return (
    <>
      <div className="hidden md:flex overflow-hidden 2xl:mx-14 md:mx-10">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 3000 }}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative zoom-effect rounded-3xl overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                className="rounded-3xl kotak"
              />
              <div className="absolute bottom-0 w-full h-full">
                <Image
                  src={Bgprofile}
                  alt="profile"
                  className="rounded-b-3xl absolute bottom-0 left-0"
                />
                <div className="flex flex-col gap-0 absolute bottom-0 inset-x-5 text-white">
                  <p className="">{slide.nama}</p>
                  <p className="text-sm font-light mb-3 opacity-75">
                    {slide.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="block md:hidden mx-6">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 3000 }}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative zoom-effect rounded-3xl"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                className="rounded-3xl kotak"
              />
              <div className="absolute bottom-0 w-full h-full">
                <Image
                  src={Bgprofile}
                  alt="profile"
                  className="rounded-b-3xl absolute bottom-0"
                />
                <div className="flex flex-col gap-0 absolute bottom-0 inset-x-5 text-white">
                  <p className="">{slide.nama}</p>
                  <p className="text-sm font-light mb-3 opacity-75">
                    {slide.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperComponent;
