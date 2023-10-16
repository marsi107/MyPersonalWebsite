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
            <div className="">
                <Swiper
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="h-[50%]"
                >
                    <SwiperSlide>
                        <a href="https://amazon-clone-app-2wie.onrender.com/" target="_blank">
                            <h3 className="headers3">Amazon Clone</h3>
                            <p className="mb-2">This is a full stack project which consist in cloning amazon with react, tailwind, express and some other technologies.</p>
                            <img src={"../resources/images/portfolio/amazon-clone.PNG"} alt="amazon clone main screen" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio