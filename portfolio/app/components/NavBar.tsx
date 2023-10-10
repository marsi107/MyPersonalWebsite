import React from 'react'

const NavBar = () => {
    return (
        <header className="absolute h-[45px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob">
            <div className="flex">
                <div className="text-lg xl:text-xl pt-2 pl-2">Home</div>
                <div className="text-lg xl:text-xl pt-2 pl-2">Portfolio</div>
                <div className="text-lg xl:text-xl pt-2 pl-2">Resume</div>
                <div className="text-lg xl:text-xl pt-2 pl-2">Contact</div>
            </div>
        </header>
    )
}

export default NavBar