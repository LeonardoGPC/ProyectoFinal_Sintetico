import React from "react";
import { Link } from "react-router-dom";
import plan from './planes.module.css';
import basic from '../../../../img/basic.jpg';
import club from '../../../../img/club.jpg';
import premium from '../../../../img/premium.jpg';

export default function Planes(){
    return(
        <div className={plan.main} id='1'>
            <h1 className={plan.select}>Selecciona un plan</h1>
            <div className={plan.planes}>
                <div className={plan.card}>
                    <img className={plan.img} src={basic}/>
                    <h2 className={plan.title}>Básico</h2>
                    <p className={plan.percent}>AHORRO 50%</p>
                    <p className={plan.price}>$9/Mes.</p>
                    <div className={plan.div_prg}>
                        <p className={plan.paragraph}> ✔️ Herramientas de publicación</p>
                        <p className={plan.paragraph}> ✔️ Publicaciones con rating</p>
                        <p className={plan.paragraph}> ✔️ Comentarios de usuarios</p>
                        <p className={plan.paragraph}> ✔️ Sube hasta 3 imágenes</p>
                    </div>
                    <div className={plan.btn_div}>
                        <Link className={plan.button}>Adquirir</Link>
                    </div>
                </div>
                <div className={plan.cardTop}>
                    <img className={plan.img} src={club}/>
                    <h2 className={plan.title}>Clubes</h2>
                    <p className={plan.percent}>AHORRO 50%</p>
                    <p className={plan.price}>$19/Mes.</p>
                    <div className={plan.div_prg}>
                        <p className={plan.paragraph}> ✔️ Publicaciones ilimitadas</p>
                        <p className={plan.paragraph}> ✔️ Herramientas de publicación</p>
                        <p className={plan.paragraph}> ✔️ Publicaciones con rating</p>
                        <p className={plan.paragraph}> ✔️ Comentarios de usuarios</p>
                        <p className={plan.paragraph}> ✔️ Sube hasta 3 imágenes</p>
                        <p className={plan.paragraph}> ✔️ Herramienta de estadísticas</p>
                        <p className={plan.paragraph}> ✔️ Contacto con usuarios</p>
                    </div>
                    <div className={plan.btn_div}>
                        <Link className={plan.button}>Adquirir</Link>
                    </div>
                </div>
                <div className={plan.card}>
                    <img className={plan.img} src={premium}/>
                    <h2 className={plan.title}> Premium</h2>
                    <p className={plan.percent}>AHORRO 50%</p>
                    <p className={plan.price}>$39/Mes.</p>
                    <div className={plan.div_prg}>
                        <p className={plan.paragraph}> ✔️ Publicaciones ilimitadas</p>
                        <p className={plan.paragraph}> ✔️ Herramientas de publicación</p>
                        <p className={plan.paragraph}> ✔️ Publicaciones con rating</p>
                        <p className={plan.paragraph}> ✔️ Comentarios de usuarios</p>
                        <p className={plan.paragraph}> ✔️ Sube hasta 3 imágenes</p>
                        <p className={plan.paragraph}> ✔️ Herramienta de estadísticas</p>
                        <p className={plan.paragraph}> ✔️ Contacto con usuarios</p>
                        <p className={plan.paragraph}> ✔️ Mayor recomendación</p>
                        <p className={plan.paragraph}> ✔️ Aparece en mejores canchas</p>
                        <p className={plan.paragraph}> ✔️ Priorida de revisión</p>
                    </div>
                    <div className={plan.btn_div}>
                        <Link className={plan.button}>Adquirir</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}