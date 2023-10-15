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
                            <h3 className="mb-2">Amazon Clone</h3>
                            <img src={"../images/amazon-clone.PNG"} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://rubenportfolio.vercel.app/" target="_blank">
                            <h3 className="mb-2">My Portfolio</h3>
                            <img src={"../images/Portfolio.PNG"} />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio