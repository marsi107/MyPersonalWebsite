'use client'
import React from 'react'
import Dropdown from './Dropdown'

const NavBar = () => {

    const menuSections = ['Home', 'AboutMe', 'Portfolio', 'TechStack', 'Resume', 'Contact']
    const darkModeSections = ['System', 'Light', 'Dark']

    const scrollToSection = (event: any) => {
        event.preventDefault()
        const sectionId = event.target.getAttribute("href")?.substring(1)
        const section = document.getElementById(sectionId)
        section?.scrollIntoView({
            behavior: "smooth"
        })
    }

    // <Bars3Icon className="cursor-pointer h-16 pl-6 sm:pr-9 sm:h-9 lg:hidden" />
    // <Bars3Icon className="cursor-pointer hover:bg-slate-500 focus:outline-none h-16 pl-6 sm:pr-9 sm:h-9 lg:hidden" onClick={toggleMenuDropdown} />
    // <MoonIcon className="cursor-pointer h-14 pl-6 pr-6 sm:h-8 sm:pl-9 lg:h-10 lg:pl-16" onClick={toggleDarkModeDropdown} />
    return (
        <header className="fixed items-center h-[50px] w-screen flex bg-defColors-second dark:bg-defColors-second_dark font-rob lg:h-[60px]">
            <div className="grow"></div>
            <Dropdown sections={menuSections} iconIndex={0} />
            <div className="flex space-x-6 text-lg sm:text-2xl sm:space-x-9 lg:space-x-16">
                <a href="#Home" className="hover:bg-slate-500 max-sm:hidden" onClick={scrollToSection}>Home</a>
                <a href="#AboutMe" className="max-lg:hidden" onClick={scrollToSection}>About Me</a>
                <a href="#Portfolio" onClick={scrollToSection}>Portfolio</a>
                <a href="#TechStack" className="max-lg:hidden" onClick={scrollToSection}>Tech Stack</a>
                <a href="#Resume" onClick={scrollToSection}>Resume</a>
                <a href="#Contact" onClick={scrollToSection}>Contact</a>
            </div>
            <Dropdown sections={darkModeSections} iconIndex={1} />
            <div className="grow"></div>
        </header>
    )
}

export default NavBar