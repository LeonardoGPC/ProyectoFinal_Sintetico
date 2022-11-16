import React from "react";
import Navbar from '../NavBar/Navbar';
import Info from './Info/info';
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";
import MiniFooter from '../MiniFooter/MiniFooter.jsx';

export default function Landing() {

function scroll () {
    if(window.scrollY === 86){
        window.scrollTo(0, 0)
    }
}

    useEffect(() => {
        window.scrollTo(0, 86)
        setTimeout(scroll, 3000)
      }, [])

    return(
        <div>
            <Navbar/>
            <Info/>
            <ContactForm/>
            <MiniFooter/>
        </div>
    )
}