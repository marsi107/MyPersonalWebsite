"use client"
import React from 'react'
import { Tilt } from 'react-tilt'
import { techList } from '../data/TechList'

const TechStack = () => {

    const iconPath = "../resources/images/icons/"
    const iconExt = ".png"

    return (
        <div id="TechStack">
            <h2 className="headers2">Tech Stack</h2>
            <div className="flex flex-row flex-wrap gap-5">
                {
                    techList.map((techItem, index) =>
                        <Tilt key={index} className="h-20 w-20">
                            <img
                                src={iconPath + techItem.name + iconExt}
                                alt={techItem.alt}
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