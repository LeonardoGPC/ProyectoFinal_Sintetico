import React from "react";
import land from './header.module.css';
import { Link } from "react-router-dom";

export default function Header() {

    return(
        <div className={land.main}>
            <div className={land.client}>
                <div className={land.container}>
                    <h1 className={land.title}>¿Quieres reservar<br/>una cancha?</h1>
                    <p className={land.paragraph}>Si estas buscando alguna cancha para reservar y<br/>jugar con tus amigos este es el mejor sitio.</p>
                    <Link className={land.cta}>Reserva ahora</Link>
                </div>
            </div>
            <div className={land.club}>
                <div className={land.club_container}>
                    <h1 className={land.club_title}>¿Quieres publicar<br/>una cancha?</h1>
                    <p className={land.club_paragraph}>¿Eres dueño de alguna chancha o club? ¡Has encontrado<br/>el mejor lugar para promocionarlo!</p>
                    <Link className={land.club_cta}>Publica ahora</Link>
                </div>
            </div>
        </div>
    )
}