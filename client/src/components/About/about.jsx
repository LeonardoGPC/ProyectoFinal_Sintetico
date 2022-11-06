import React from 'react'
import Navbar from '../NavBar/Navbar.jsx'
import abt from './about.module.css'

function About() {
  return (
    <div className={abt.main}>
      <Navbar/>
      <div className={abt.text}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium, minima ab, magnam nesciunt, doloremque cupiditate repellat nostrum voluptas quibusdam provident possimus. Nostrum explicabo cum labore est, dolore voluptatibus quas! Lore</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium, minima ab, magnam nesciunt, cabo cum labore est, dolore voluptatibus quas! Lore</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium, minima ab, magnam nesciunt, doloremque cupiditate repellat nostrum voluptas quibusdam provident possimus. Nostrbore est, dolore voluptatibus quas! Lore</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis praesentium, minima ab, magnam nesciunt, doloremque cupiditate repellat nostrum voluptas quibusdam provident possimus. Nostrum explicabo cum labore est, dolore voluptatibus quas! Lore  nostrum voluptas quibusdam provident possimus. Nostrum explicabo cum labore est, dolore voluptatibus quas! Lor</p>
      </div>
      <svg className={abt.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#404040" fill-opacity="1" d="M0,0L60,5.3C120,11,240,21,360,37.3C480,53,600,75,720,69.3C840,64,960,32,1080,21.3C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  )
}

export default About