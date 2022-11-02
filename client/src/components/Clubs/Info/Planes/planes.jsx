import React from "react";
import { Link } from "react-router-dom";
import plan from './planes.module.css';
// import basic from '../../../../img/basic.jpg';
// import club from '../../../../img/club.jpg';
// import premium from '../../../../img/premium.jpg';
import { useSelector } from "react-redux";

export default function Planes(){

    const planes = useSelector((state) => state.plan)

    return(
        <div className={plan.main} id='1'>
            <h1 className={plan.select}>Selecciona un plan</h1>
            <div className={plan.planes}>
                <div className={plan.card}>
                    <img className={plan.img} src={planes.basic.img}/>
                    <h2 className={plan.title}>{planes.club.name}</h2>
                    <p className={plan.percent}>AHORRO {planes.basic.desc}%</p>
                    <p className={plan.price}>${(planes.basic.price / 100) * planes.basic.desc}/Mes.</p>
                    <div className={plan.div_prg}>
                        <p className={plan.paragraph}> ✔️ Herramientas de publicación</p>
                        <p className={plan.paragraph}> ✔️ Publicaciones con rating</p>
                        <p className={plan.paragraph}> ✔️ Comentarios de usuarios</p>
                        <p className={plan.paragraph}> ✔️ Sube hasta 3 imágenes</p>
                    </div>
                    <div className={plan.btn_div}>
                        <Link to='/pay' onClick={() => localStorage.setItem('plan', 'basic')} className={plan.button}>Adquirir</Link>
                    </div>
                </div>
                <div className={plan.cardTop}>
                    <img className={plan.img} src={planes.club.img}/>
                    <h2 className={plan.title}>{planes.club.name}</h2>
                    <p className={plan.percent}>AHORRO {planes.club.desc}%</p>
                    <p className={plan.price}>${(planes.club.price / 100) * planes.club.desc}/Mes.</p>
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
                        <Link to='/pay' onClick={() => localStorage.setItem('plan', 'club')} className={plan.button}>Adquirir</Link>
                    </div>
                </div>
                <div className={plan.card}>
                    <img className={plan.img} src={planes.premium.img}/>
                    <h2 className={plan.title}>{planes.premium.name}</h2>
                    <p className={plan.percent}>AHORRO {planes.premium.desc}%</p>
                    <p className={plan.price}>${(planes.premium.price / 100) * planes.premium.desc}/Mes.</p>
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
                        <Link to='/pay' onClick={() => localStorage.setItem('plan', 'premium')} className={plan.button}>Adquirir</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}