import React from "react";
import Navbar from '../NavBar/Navbar.jsx';
import MiniFooter from '../MiniFooter/MiniFooter.jsx'
import easterEgg from './easterEgg.module.css'

export default function EasterEgg(){
    return(
        <div className={easterEgg.container}>
        <Navbar/>
        <div className={easterEgg.playerContainer}>
            <iframe src='https://www.youtube.com/embed/O8G9ytZg-bM?autoplay=1&mute=1'
            frameBorder='0'
            allowFullScreen
            title='video'
            className={easterEgg.video}
            />
            <img className={easterEgg.diego} src="https://res.cloudinary.com/deirkmhyd/image/upload/v1669383365/sintetico/diego_gropts.png" alt="diego" />
        </div>
        <MiniFooter/>
      </div>
    )
}