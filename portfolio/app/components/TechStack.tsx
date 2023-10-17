"use client"
import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import { techList } from '../data/TechList'

const TechStack = () => {

    const iconPath = "../resources/images/icons/"
    const iconExt = ".png"

    const [isHovered, setIsHovered] = useState(false);
    const [indexHovered, setIndexHovered] = useState(-1);

    const onIconHover = (index: number) => {
        setIsHovered(true)
        setIndexHovered(index)
    }

    return (
        <div id="TechStack">
            <h2 className="headers2">Tech Stack</h2>
            <div className="flex flex-row flex-wrap gap-5">
                {
                    techList.map((techItem, index) =>
                        <div key={index}>
                            <Tilt
                                className="h-20 w-20"
                                onMouseEnter={() => onIconHover(index)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img
                                    src={iconPath + techItem.name + iconExt}
                                    alt={techItem.alt}
                                    width={80}
                                    height={80}
                                />

                            </Tilt>
                            <div className="h-6 mt-1 -mb-2">
                                {
                                    isHovered && indexHovered === index && (
                                        <div className="relative text-center font-rale text-defColors-dBG dark:text-defColors-lBG">
                                            {techList[indexHovered].fullName}
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default TechStack