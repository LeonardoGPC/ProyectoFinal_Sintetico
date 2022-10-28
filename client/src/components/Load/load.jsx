import React from "react";
import load from './load.module.css';
import balon from '../../img/balon.png';

export default function Load(){
    return(
        <div className={load.main}>
            <div className={load.container}>
            <img src={balon} className={load.balon}/>
            </div>
        </div>
    )
}