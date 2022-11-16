import React from "react";
import Header from "./Header/header";
import Benefits from "./Benefits/benefits";
import Faq from "./FAQ/Faq";
import teams from "../data"
import inf from './info.module.css';
import Card from "./Card/Card.jsx";


export default function Info() {
    
    return (
        <div className={inf.bgimg}>
            <div className={inf.bgfilter}>
                <Header/>
                <Card/>
                <Benefits/>
                {/* <Faq/> */}
            </div>
        </div>
    )
}