import React from "react";
import Header from "./Header/header";
import Card from "./Card/Card";
import Benefits from "./Benefits/benefits";
import Faq from "./FAQ/Faq";
import teams from "../data"
import inf from './info.module.css';

export default function Info() {
    return (
        <div className={inf.bgimg}>
            <div className={inf.bgfilter}>
                <Header/>
                <Card teams={teams}/>
                <Benefits/>
                <Faq/>
            </div>
        </div>
    )
}