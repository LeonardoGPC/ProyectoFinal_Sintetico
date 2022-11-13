import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Logo_roto.png'
import e from './error.module.css'

function Error() {
  return (
    <div className={e.main}>
        <div className={e.container}>
            <img src={logo} className={e.img}/>
            <h1>Oops</h1>
            <p>Esta página no está disponible. Lamentamos las molestias.</p>
            <Link to='/' className={e.cta}>Regresar al inicio</Link>
        </div>
    </div>
  )
}

export default Error
