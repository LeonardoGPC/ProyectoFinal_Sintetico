import React from "react";
import Navbar from '../NavBar/Navbar';
import Info from './Info/info';
import ContactForm from "./ContactForm/ContactForm";

export default function Landing() {
    return(
        <div>
            <Navbar/>
            <Info/>
            <ContactForm/>
        </div>
    )
}