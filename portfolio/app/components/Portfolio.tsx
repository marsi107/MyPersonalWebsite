"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Portfolio = () => {
    return (
        <div id="Portfolio">
            <h2 className="headers2">Portfolio</h2>
            <div className="mr-5">
                <Swiper
                    loop={true}
                    spaceBetween={1}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="h-[50%] text-defColors-main"
                >
                    <SwiperSlide>
                        <img src={"../../images/amazon-clone.PNG"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"../../images/Portfolio.jpg"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio