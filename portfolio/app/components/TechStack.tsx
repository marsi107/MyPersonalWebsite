"use client"
import React from 'react'
import Image from 'next/image';
import { Tilt } from 'react-tilt'
import { techList } from '../data/TechList'

const TechStack = () => {

    const iconPath = "/../resources/images/icons/"
    const iconExt = ".png"

    return (
        <div id="TechStack">
            <h2 className="headers2">Tech Stack</h2>
            <div className="flex flex-row flex-wrap gap-10">
                {
                    techList.map((techItem) =>
                        <Tilt className="h-20 w-20">
                            <Image
                                src={iconPath + techItem + iconExt}
                                alt="Description of the image"
                                width={80}
                                height={80}
                            />
                        </Tilt>
                    )
                }
            </div>
        </div>
    )
}

export default TechStack