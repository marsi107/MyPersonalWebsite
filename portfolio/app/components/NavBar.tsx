import React from 'react'

const NavBar = () => {
    return (
        <header className="absolute items-center h-[45px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob">
            <div className="grow"></div>
            <div>DD</div>
            <div className="flex space-x-3 pl-6">
                <div className="text-lg xl:text-xl">Home</div>
                <div className="text-lg xl:text-xl">Portfolio</div>
                <div className="text-lg xl:text-xl">Resume</div>
                <div className="text-lg xl:text-xl">Contact</div>
            </div>
            <div className="pl-6">
                DM
            </div>
            <div className="grow"></div>
        </header>
    )
}

export default NavBar