import React from "react";
import land from './header.module.css';
import { Link } from "react-router-dom";
import ojo from '../../../../img/icons/ojo.png'
import candado from '../../../../img/icons/candado.png'
import barras from '../../../../img/icons/barras.png'

export default function Header() {

    return(
        <div className={land.main}>
            <a className={land.button} href='#1'>Ver planes</a>
            <h1 className={land.title}>Contrata tu plan y publica<br/>tu cancha ahora mismo</h1>
            <div className={land.cards}>
                <div className={land.card}>
                    <h3 className={land.card_title}>Mayor alcance</h3>
                    <img className={land.card_img} src={ojo}/>
                    <p className={land.card_paragraph}>10k vistas</p>
                </div>
                <div className={land.card}>
                    <h3 className={land.card_title}>Rentas Seguras</h3>
                    <img className={land.card_img} src={candado}/>
                    <p className={land.card_paragraph}>Tenemos control<br/>de los usuarios</p>
                </div>
                <div className={land.card}>
                    <h3 className={land.card_title}>Gran beneficio</h3>
                    <img className={land.card_img} src={barras}/>
                    <p className={land.card_paragraph}>¡El 100% de la renta<br/>será suyo!</p>
                </div>
            </div>
        </div>
    )
}