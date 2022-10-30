import React from "react";
import Cards from "../Cards/cards.jsx";
import Navbar from '../NavBar/Navbar.jsx';
import Filters from "./Filters/filters.jsx";
import home from "./home.module.css";
import { useEffect } from "react";
import MiniFooter from '../MiniFooter/MiniFooter.jsx'

export default function Home(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className={home.container}>
            <Navbar/>
            <div className={home.div}>
                <Filters/>
                <Cards/>
            </div>
            <MiniFooter/>
        </div>
    )
}