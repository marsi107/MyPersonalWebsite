import React from 'react'
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'

const NavBar = () => {
    return (
        <header className="fixed items-center h-[50px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob lg:h-[60px]">
            <div className="grow"></div>
            <Bars3Icon className="h-16 pl-6 sm:pr-9 sm:h-9 lg:hidden" />
            <div className="flex space-x-6 text-lg sm:text-2xl sm:space-x-9 lg:space-x-16">
                <a href="#Home" className="max-sm:hidden">Home</a>
                <a href="#AboutMe" className="max-lg:hidden">About Me</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#TechStack" className="max-lg:hidden">Tech Stack</a>
                <a href="#Resume">Resume</a>
                <a href="#Contact">Contact</a>
            </div>
            <MoonIcon className="h-14 pl-6 pr-6 sm:h-8 sm:pl-9 lg:h-10 lg:pl-16" />
            <div className="grow"></div>
        </header>
    )
}

export default NavBar