import React from "react";
import Navbar from "../NavBar/Navbar";
import Info from "./Info/info";
import ContactForm from "../Landing/ContactForm/ContactForm";
import MiniFooter from '../MiniFooter/MiniFooter.jsx';

export default function Clubs(){
    return (
        <div>
            <Navbar/>
            <Info/>
            <ContactForm/>
            <MiniFooter/>
        </div>
    )
}