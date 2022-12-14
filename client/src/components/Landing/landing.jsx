import React from "react";
import Navbar from '../NavBar/Navbar';
import Info from './Info/info';
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";

export default function Landing() {

function scroll () {
    window.scrollTo(0, 0)
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
        </div>
    )
}