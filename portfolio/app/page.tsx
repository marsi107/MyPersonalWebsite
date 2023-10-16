import React from 'react'
import { NavBar, AboutMe, Portfolio, TechStack, Resume, Contact } from "./components"
//import NavBar from './components/NavBar'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20 mx-5 lg:px-32">
        <div id="Home">
          <AboutMe />
        </div>
        <TechStack />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default HomePage