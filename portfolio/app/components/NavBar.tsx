import React from 'react'
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'

const NavBar = () => {
    return (
        <header className="absolute items-center h-[45px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob">
            <div className="grow"></div>
            <Bars3Icon className="h-6" />
            <div className="flex space-x-6 pl-6">
                <div className="text-lg xl:text-xl">Home</div>
                <div className="text-lg xl:text-xl">Portfolio</div>
                <div className="text-lg xl:text-xl">Resume</div>
                <div className="text-lg xl:text-xl">Contact</div>
            </div>
            <MoonIcon className="h-5 pl-6" />
            <div className="grow"></div>
        </header>
    )
}

export default NavBar