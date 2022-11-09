import React from 'react'
import Navbar from '../../NavBar/Navbar'
import logo from '../../img/LogoSintetico.png'
import { Link } from 'react-router-dom'
import sc from './success.module.css'
import { useEffect } from 'react'

function Success() {

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div>
      <Navbar/>
      <div className={sc.main}>
        <div className={sc.container}>
            <img src={logo} className={sc.img}/>
            <h2>Compra realizada con éxito</h2>
            <h1>¡Gracias por elegirnos!</h1>
            <p className={sc.paragraph1}>Ahora puedes gestionar tus reservas o planes en tu <Link to='/profile'>perfil.</Link></p>
            <p className={sc.paragraph2}>O continuar navegando</p>
            <Link to='/' className={sc.button}>Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}

export default Success
