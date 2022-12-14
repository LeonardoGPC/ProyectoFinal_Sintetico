import React, { useState } from "react";
import { Link } from "react-router-dom";
import plan from './planes.module.css';
// import basic from '../../../../img/basic.jpg';
// import club from '../../../../img/club.jpg';
// import premium from '../../../../img/premium.jpg';
import { useSelector } from "react-redux";
import { set } from "date-fns";

export default function Planes(){

    const planes = useSelector((state) => state.plan)
    const [modal, setModal] = useState(false)
    const [input, setInput] = useState()
    let rent = localStorage.getItem('rent')

    const basicHandler = () => {
        localStorage.setItem('plan', 'basic')
        if(localStorage.getItem('rent')){
            localStorage.removeItem('rent')
        }
        window.location.replace('http://localhost:3000/pay')
    }

    const clubHandler = () => {
        localStorage.setItem('plan', 'club')
        if(localStorage.getItem('rent')){
            localStorage.removeItem('rent')
        }
        window.location.replace('http://localhost:3000/pay')
    }

    const premiumHandler = () => {
        localStorage.setItem('plan', 'premium')
        if(localStorage.getItem('rent')){
            localStorage.removeItem('rent')
        }
        window.location.replace('http://localhost:3000/pay')
    }

    const popUp = () => {
        setModal(false)
        if (input === 'basic'){
            basicHandler()
        } else if (input === 'club'){
            clubHandler()
        } else {
            premiumHandler()
        }
    }

    const buttonHandler = (e) => {
        e.preventDefault()
        setInput(e.target.name)
        if(rent){
            setModal(true)
        } else if (e.target.name === 'basic'){
            basicHandler()
        } else if (e.target.name === 'club'){
            clubHandler()
        } else {
            premiumHandler()
        }
    }

    return(
        <div className={plan.main} id='1'>
            <h1 className={plan.select}>Selecciona un plan</h1>
            <div className={plan.planes}>
                <div className={plan.card}>
                    <img className={plan.img} src={planes.basic.img}/>
                    <h2 className={plan.title}>{planes.basic.name}</h2>
                    <p className={plan.percent}>AHORRO {planes.basic.desc}%</p>
                    <p className={plan.price}>${planes.basic.price - ((planes.basic.price / 100) * planes.basic.desc)}/Mes.</p>
                    <div className={plan.div_prg}>
                        <p className={plan.paragraph}> ?????? Herramientas de publicaci??n</p>
                        <p className={plan.paragraph}> ?????? Publicaciones con rating</p>
                        <p className={plan.paragraph}> ?????? Comentarios de usuarios</p>
                        <p className={plan.paragraph}> ?????? Sube hasta 3 im??genes</p>
                    </div>
                    <div className={plan.btn_div}>
                        <button onClick={(e) => buttonHandler(e)} name='basic' className={plan.button}>Adquirir</button>
                    </div>
                </div>
                <div className={plan.cardTop}>
                    <img className={plan.img} src={planes.club.img}/>
                    <h2 className={plan.title}>{planes.club.name}</h2>
                    <p className={plan.percent}>AHORRO {planes.club.desc}%</p>
                    <p className={plan.price}>${planes.club.price - ((planes.club.price / 100) * planes.club.desc)}/Mes.</p>
                    <div className={plan.div_prg}>
                        <p className={plan.paragraph}> ?????? Publicaciones ilimitadas</p>
                        <p className={plan.paragraph}> ?????? Herramientas de publicaci??n</p>
                        <p className={plan.paragraph}> ?????? Publicaciones con rating</p>
                        <p className={plan.paragraph}> ?????? Comentarios de usuarios</p>
                        <p className={plan.paragraph}> ?????? Sube hasta 3 im??genes</p>
                        <p className={plan.paragraph}> ?????? Herramienta de estad??sticas</p>
                        <p className={plan.paragraph}> ?????? Contacto con usuarios</p>
                    </div>
                    <div className={plan.btn_div}>
                        <button onClick={(e) => buttonHandler(e)} name='club' className={plan.button}>Adquirir</button>
                    </div>
                </div>
                <div className={plan.card}>
                    <img className={plan.img} src={planes.premium.img}/>
                    <h2 className={plan.title}>{planes.premium.name}</h2>
                    <p className={plan.percent}>AHORRO {planes.premium.desc}%</p>
                    <p className={plan.price}>${planes.premium.price - ((planes.premium.price / 100) * planes.premium.desc)}/Mes.</p>
                    <div className={plan.div_prg}>
                        <p className={plan.paragraph}> ?????? Publicaciones ilimitadas</p>
                        <p className={plan.paragraph}> ?????? Herramientas de publicaci??n</p>
                        <p className={plan.paragraph}> ?????? Publicaciones con rating</p>
                        <p className={plan.paragraph}> ?????? Comentarios de usuarios</p>
                        <p className={plan.paragraph}> ?????? Sube hasta 3 im??genes</p>
                        <p className={plan.paragraph}> ?????? Herramienta de estad??sticas</p>
                        <p className={plan.paragraph}> ?????? Contacto con usuarios</p>
                        <p className={plan.paragraph}> ?????? Mayor recomendaci??n</p>
                        <p className={plan.paragraph}> ?????? Aparece en mejores canchas</p>
                        <p className={plan.paragraph}> ?????? Priorida de revisi??n</p>
                    </div>
                    <div className={plan.btn_div}>
                        <button onClick={(e) => buttonHandler(e)} name='premium' className={plan.button}>Adquirir</button>
                    </div>
                </div>
            </div>
            {modal && <div className={plan.modal_main}>
                <div className={plan.modal_box}>
                    <p>Al hacer click en <b>Aceptar</b> se borrar??n las reservas<br/>que tienes en tu carrito de compras.</p>
                    <h1>??Quieres continuar?</h1>
                    <div className={plan.modal_btns}>
                        <button onClick={() => setModal(false)}>Cancelar</button>
                        <button onClick={() => popUp()}>Aceptar</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}