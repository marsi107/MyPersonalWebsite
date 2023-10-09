import React from 'react'
import { NavBar, Portfolio, TechStack, Resume, Contact } from "./components"
//import NavBar from './components/NavBar'

const HomePage = () => {
  return (
    <div className="p-2">
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