import React from "react";
import land from './header.module.css';
// import right from '../../../img/rightArrow.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

    const [size, setSize] = useState({
        sz1: '100%',
        sz2: '0%',
        left: '0%',
        right: '100%'
    })

    return(
        <div className={land.main}>
            {/* <img src={gif1} className={land.bg1}/>
            <div className={land.bg1}>
            <div className={land.div_text}>
                <div className={land.div_text2} style={{left: size.left}}>
                    <div className={land.div_textt2}>
                    <h1 className={land.title}>¿QUIERES ALQUILAR UNA CANCHA?</h1>
                    <div className={land.div_paragraph}>
                        <h2 className={land.paragraph}>¡Busca canchas en renta!</h2>
                        <p className={land.little_paragraph}>Encuentra las mejores canchas disponibles<br/>en tu zona y al mejor precio</p>
                        <Link className={land.cta}>
                            <span>RESERVAR</span>
                            <span className={land.cta_span}>
                              <img src={right} className={land.rigth}></img>
                              <img src={right} className={land.rigth2}></img>
                              <img src={right} className={land.rigth3}></img>
                            </span> 
                        </Link>
                    </div>
                    </div>
                </div>
                <div className={land.div_text3} style={{width: size.sz2}}>
                    <div className={land.div_text4}>
                        <h1 className={land.title2}>¿QUIERES ALQUILAR UNA CANCHA?</h1>
                        <div className={land.div_paragraph}>
                            <h2 className={land.paragraph}>¡Renta tus canchas!</h2>
                            <p className={land.little_paragraph}>Publica tu club deportivo y recibe<br/>solicitudes de renta, pon tu propio precio!</p>
                            <Link className={land.cta}>
                                <span>PUBLICAR</span>
                                <span className={land.cta_span}>
                                  <img src={right} className={land.rigth}></img>
                                  <img src={right} className={land.rigth2}></img>
                                  <img src={right} className={land.rigth3}></img>
                                </span> 
                            </Link>
                        </div>
                    </div>
                </div>
                <h1 className={land.title} onClick={() => setSize({sz1: '100%', sz2: '0%', left: '0%'})}>¿QUIERES ALQUILAR UNA CANCHA?</h1>
                <h1 className={land.title2} onClick={() => setSize({sz1: '0%', sz2: '100%', left: '-100%'})}>¿ERES PROPIETARIO DE ALGUUN CLUB?</h1>
            </div>
            </div> */}
            <h1>HolaMundo</h1>
        </div>
    )
}