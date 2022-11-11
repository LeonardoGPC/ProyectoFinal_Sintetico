import React from 'react'
import Navbar from '../../NavBar/Navbar'
import logo from '../../img/LogoSintetico.png'
import { Link } from 'react-router-dom'
import fa from './failure.module.css'

function Success() {
  return (
    <div>
      <Navbar/>
      <div className={fa.main}>
        <div className={fa.container}>
            <img src={logo} className={fa.img}/>
            <h2>No se pudo realizar la compra</h2>
            <h1>¡Lamentamos los inconvenientes!</h1>
            <p className={fa.paragraph1}>¿Desea reintentar la transacción? Click <Link to='/pay'>aquí.</Link></p>
            <p className={fa.paragraph2}>O continuar navegando</p>
            <input type='button' value='Volver al inicio' className={fa.button}/>
        </div>
      </div>
    </div>
  )
}

export default Success