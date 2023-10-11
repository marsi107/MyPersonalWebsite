import React from 'react'
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'

const NavBar = () => {
    return (
        <header className="absolute items-center h-[50px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob lg:h-[60px]">
            <div className="grow"></div>
            <Bars3Icon className="h-10 pl-6 sm:pr-9 sm:h-9 lg:hidden" />
            <div className="flex space-x-6 text-xl sm:text-2xl sm:space-x-9 lg:space-x-16">
                <div className="max-sm:hidden">Home</div>
                <div>Portfolio</div>
                <div className="max-lg:hidden">Tech Stack</div>
                <div>Resume</div>
                <div>Contact</div>
            </div>
            <MoonIcon className="h-10 pl-6 pr-6 sm:h-8 sm:pl-9 lg:h-10 lg:pl-16" />
            <div className="grow"></div>
        </header>
    )
}

export default NavBar