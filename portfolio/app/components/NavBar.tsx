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

    return (
        <header className="fixed items-center h-[50px] w-screen flex shadow-lg bg-defColors-lBG text-defColors-main dark:bg-defColors-dBG font-rob lg:h-[60px]">
            <div className="grow"></div>
            <div className="px-3 pt-1 sm:pr-5 lg:hidden">
                <Dropdown sections={menuSections} iconIndex={0} />
            </div>
            <div className="flex text-lg h-full items-center sm:text-2xl">
                <a href="#Home" className="hover:bg-defColors-lGray dark:hover:bg-defColors-dGray h-full pt-2 px-3 sm:px-5 lg:pt-3 lg:px-8 rounded-md max-sm:hidden" onClick={scrollToSection}>Home</a>
                <a href="#AboutMe" className="hover:bg-defColors-lGray dark:hover:bg-defColors-dGray h-full pt-2 px-3 sm:px-5 lg:pt-3 lg:px-8 rounded-md max-lg:hidden" onClick={scrollToSection}>About Me</a>
                <a href="#Portfolio" className="hover:bg-defColors-lGray dark:hover:bg-defColors-dGray h-full pt-[10px] px-3 sm:pt-2 sm:px-5 lg:pt-3 lg:px-8 rounded-md" onClick={scrollToSection}>Portfolio</a>
                <a href="#TechStack" className="hover:bg-defColors-lGray dark:hover:bg-defColors-dGray h-full pt-2 px-3 sm:px-5 lg:pt-3 lg:px-8 rounded-md max-lg:hidden" onClick={scrollToSection}>Tech Stack</a>
                <a href="#Resume" className="hover:bg-defColors-lGray dark:hover:bg-defColors-dGray h-full pt-[10px] px-3 sm:pt-2 sm:px-5 lg:pt-3 lg:px-8 rounded-md" onClick={scrollToSection}>Resume</a>
                <a href="#Contact" className="hover:bg-defColors-lGray dark:hover:bg-defColors-dGray h-full pt-[10px] px-3 sm:pt-2 sm:px-5 lg:pt-3 lg:px-8 rounded-md" onClick={scrollToSection}>Contact</a>
            </div>
            <div className='px-3 pt-1 sm:pl-5 lg:pt-[6px] lg:pl-8'>
                <Dropdown sections={darkModeSections} iconIndex={1} />
            </div>
            <div className="grow"></div>
        </header>
    )
}

export default NavBar