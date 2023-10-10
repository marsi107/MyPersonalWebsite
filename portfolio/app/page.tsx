import React from 'react'
import { NavBar, Portfolio, TechStack, Resume, Contact } from "./components"
//import NavBar from './components/NavBar'

const HomePage = () => {
  return (
    <div className="h-screen bg-defColors-first text-defColors-text dark:bg-defColors-first_dark dark:text-defColors-text_dark font-noto">
      <NavBar />
      HomePage
      <Portfolio />
      <TechStack />
      <Resume />
      <Contact />
    </div>
  )
}

export default HomePage