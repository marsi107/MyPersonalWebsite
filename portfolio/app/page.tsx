import React from 'react'
import { NavBar, Portfolio, TechStack, Resume, Contact } from "./components"
//import NavBar from './components/NavBar'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20 pl-5">
        <div id="Home">
          <p>Some dummy for homepage text Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi dolorem obcaecati quis illum quo nihil, magni iusto minus magnam dolor, voluptatibus ad aut sunt architecto et voluptatum beatae voluptate?</p>
        </div>
        <div id="AboutMe">
          <p>Some dummy text for aboutme Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, distinctio maxime. Eius consectetur repellat sunt inventore enim amet, soluta voluptatem in alias doloremque ea neque? Optio expedita debitis a nulla facilis sint perspiciatis, commodi odit quisquam vero veniam corrupti labore, laboriosam corporis minima voluptates, fugiat quo deleniti pariatur deserunt illum?</p>
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