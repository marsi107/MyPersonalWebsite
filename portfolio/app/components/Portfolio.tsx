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
                        <h3 className="mb-2">Amazon Clone</h3>
                        <img src={"../images/amazon-clone.PNG"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h3 className="mb-2">My Portfolio</h3>
                        <img src={"../images/Portfolio.PNG"} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, debitis facere asperiores cum praesentium quod adipisci ipsum totam provident qui ratione nobis, ad corrupti consequuntur libero facilis sunt culpa, inventore quibusdam necessitatibus accusamus. Cupiditate alias nesciunt assumenda at fuga tenetur recusandae qui eius odit temporibus, vero totam quod ipsum atque quam debitis dolores aut architecto, numquam explicabo. Tempore earum unde fuga, animi nisi quisquam perspiciatis adipisci suscipit excepturi, blanditiis, cumque accusantium iure dolorem voluptates voluptatibus consectetur vitae? Aut aspernatur repudiandae deleniti veniam, doloremque nisi voluptatibus? Maxime, laudantium. Culpa, dolores reiciendis quas quibusdam dicta a saepe asperiores qui pariatur eos optio odit consequatur explicabo nihil, reprehenderit quidem corrupti ipsum, quia animi. Molestias, dolor aliquam nostrum beatae architecto inventore debitis blanditiis autem, mollitia omnis ad odit expedita laudantium labore dolorem consequatur adipisci aliquid officiis porro dolores nam accusamus, accusantium dolorum incidunt. Dolor voluptas ea recusandae impedit minima quibusdam aliquid est! Est incidunt, optio distinctio atque dolor accusantium blanditiis recusandae impedit saepe aspernatur. Libero expedita sequi nam iusto dignissimos neque eius. Veritatis possimus nulla rerum velit sequi dolore accusamus officia. Repellat suscipit ducimus aliquid excepturi iure cumque pariatur repudiandae exercitationem adipisci, quibusdam est maxime sunt unde ullam eaque illum omnis recusandae tenetur? Sit sapiente explicabo dolores, impedit veritatis corporis dolore eaque in ex suscipit molestiae fugiat omnis doloremque accusamus, laborum reiciendis? Nesciunt facilis perspiciatis nobis quaerat ad. Architecto ipsam et id suscipit ipsum commodi veniam eaque officiis omnis dolores nostrum vitae voluptas debitis voluptatibus laboriosam sit, natus tempore! Molestias eos hic a repellendus aliquid, modi iste molestiae assumenda blanditiis dolore dolor earum facere iure omnis incidunt cupiditate minus alias totam. Doloribus, perspiciatis provident, molestiae commodi ex, facilis quam numquam ea deleniti odit modi repudiandae veniam odio magnam doloremque illum quasi voluptate officia. Amet cumque ab expedita eos similique aperiam veritatis consequuntur! Natus, quod.</p>
        </div>
    )
}

export default Portfolio