import React from 'react'
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'

const NavBar = () => {
    return (
        <header className="absolute items-center h-[45px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob">
            <div className="grow"></div>
            <Bars3Icon className="h-7 pl-3 lg:hidden" />
            <div className="flex pl-3 space-x-3 text-lg lg:space-x-12 lg:text-2xl">
                <div>Home</div>
                <div>Portfolio</div>
                <div className="max-lg:hidden">Tech Stack</div>
                <div>Resume</div>
                <div>Contact</div>
            </div>
            <MoonIcon className="h-7 pl-3 pr-3 lg:h-10 lg:pl-6" />
            <div className="grow"></div>
        </header>
    )
}

export default NavBar