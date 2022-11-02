import React from 'react'
import p from './pagos.module.css'
import Navbar from '../NavBar/Navbar.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function Pagos() {

    let user = useSelector((state) => state.user)
    let plan = localStorage.getItem('plan')
    let rent = localStorage.getItem('rent')
    const planes = useSelector((state) => state.plan)
    const [carga, setCarga] = useState(false)

    const pay = () => {
        console.log('llevar a mercadopago')
        localStorage.clear()
    }

    const changeCarga = () => {
        setCarga(false)
    }

    const changePlan = (e) => {
        localStorage.setItem('plan', e.target.value)
        plan = localStorage.getItem('plan')
        setCarga(true)
        setTimeout(changeCarga, 1000)
    }

    if(user.length === 0){
        window.location.replace("http://localhost:3000/login");
    } else if(plan.length > 0) {
        return (
          <div className={p.main}>
              <Navbar/>
              <div className={p.container}>
              <div className={p.box}>
                  {carga ? <div className={p.info2}><div className={p.carga}></div></div> : <div className={p.info}>
                      <img src={planes[plan].img} className={p.img}/>
                      <h2>Plan: {planes[plan].name}</h2>
                      <p className={p.type}>Tipo: Suscripción</p>
                      <p className={p.desc}>Los planes te permiten publicar en nuestro sitio web tu cancha o club para que las personas puedan rentarla; cada plan tiene distintos beneficios. No cobramos comisión, ¡Todo es para ti!</p>
                      <select defaultValue='default' onChange={(e) => changePlan(e)}>
                        <option value='default' disabled>Cambiar plan</option>
                        <option value='basic'>Básico</option>
                        <option value='club'>Clubes</option>
                        <option value='premium'>Premium</option>
                      </select>
                  </div>}
                  <div className={p.price}>
                      <p className={p.price_prod}>Total del producto: {planes[plan].price}$/mes.</p>
                      {planes[plan].desc > 0 ? <p className={p.price_desc}>Descuento: {planes[plan].desc}%</p> : null}
                      <p className={p.price_total}>Total: {planes[plan].price - (planes[plan].price / 100 * planes[plan].desc)}$/mes.</p>
                      <input type='button' onClick={() => pay()} value='Continuar'/>
                  </div>
                  </div>
            </div>
          </div>
        )
    } else if(rent.length > 0){
        return (
            <div className={p.main}>
                <Navbar/>
                <div className={p.container}>
                <div className={p.box}>
                    <div className={p.info}>
                        <img/>
                        <h2>Nombre: nombre</h2>
                        <p>Tipo: tipo</p>
                        <p>Breve Descripción</p>
                    </div>
                    <div className={p.price}>
                        <p>Total del producto: precio</p>
                        <p>Total: precio</p>
                        <input type='button' onClick={() => pay()} value='Continuar'/>
                    </div>
                    </div>
              </div>
            </div>
          )
    } else {
        return (
            <div className={p.main}>
                <Navbar/>
                <div className={p.container}>
                    <div className={p.box}>
                        <h1>Lo siento, el carrito<br/>está vacío.</h1>
                        <input value='Regresar' type='button' onClick={() => window.history.back()}/>
                    </div>
                </div>
            </div>
          )
    }
}

export default Pagos
