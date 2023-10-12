import React from 'react'
import { NavBar, Portfolio, TechStack, Resume, Contact } from "./components"
//import NavBar from './components/NavBar'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20 pl-5">
        <div id="Home">
          <p>Some dummy for homepage</p>
        </div>
        <div id="AboutMe">
          <p>Some dummy text for aboutme </p>
        </div>
        <Portfolio />
        <TechStack />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default HomePage