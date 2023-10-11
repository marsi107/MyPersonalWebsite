import React from 'react'
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'

const NavBar = () => {
    return (
        <header className="absolute items-center h-[50px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob">
            <div className="grow"></div>
            <Bars3Icon className="h-8 pl-6 lg:hidden" />
            <div className="flex space-x-6 text-xl lg:space-x-12 lg:text-2xl">
                <div className="max-sm:hidden">Home</div>
                <div>Portfolio</div>
                <div className="max-lg:hidden">Tech Stack</div>
                <div>Resume</div>
                <div>Contact</div>
            </div>
            <MoonIcon className="h-7 pl-6 pr-6 lg:h-10 lg:pl-6" />
            <div className="grow"></div>
        </header>
    )
}

export default NavBar