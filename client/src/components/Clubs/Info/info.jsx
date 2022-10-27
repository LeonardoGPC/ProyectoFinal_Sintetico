import React from "react";
import inf from './info.module.css';
import Header from "./Header/header";
import Planes from "./Planes/planes";

export default function Info() {
    return (
        <div className={inf.bgimg}>
            <div className={inf.bgfilter}>
                <Header/>
                <Planes/>
            </div>
        </div>
    )
}