import React from 'react'
import log from './login.module.css'
import logo from '../img/balon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [dinamic, setDinamic] = useState('0')

  return (
    <div className={log.main}>
      <div className={log.container}>   
        <div className={log.register}>
            <h2>Registrarse</h2>
            <form>
                <div>
                    <p>Usuario</p>
                    <input type='text' className={log.inp}/>
                </div>
                <div>
                    <p>Correo</p>
                    <input type='text' className={log.inp}/>
                </div>
                <div>
                    <p>Contraseña</p>
                    <input type='password' className={log.inp}/>
                </div>
                <div>
                    <p>Confirmar contraseña</p>
                    <input type='password' className={log.inp}/>
                </div>
                <div>
                    <input className={log.btn} type='submit'/>
                </div>
            </form>
            <p className={log.switch}>¿Ya tienes cuenta? <span onClick={() => setDinamic('0')}>Inicia sesión</span></p>
        </div>
        <div className={log.login}>
            <img src={logo} className={log.logo}/>
            <h4>Inicia sesión con Google/Facebook</h4>
            <p className={log.division}>------------ o con tu usuario -----------</p>
            <form>
                <div className={log.user}>
                    <p>Usuario:</p>
                    <input type='text'/>
                </div>
                <div className={log.pass}>
                    <p>Contraseña:</p>
                    <input type='password'/>
                </div>
                <div className={log.button}>
                    <input type='submit' value='Iniciar sesión'/>
                </div>            
            </form>
            <p className={log.switch}>¿Aún no tienes cuenta? <span onClick={() => setDinamic('calc(100% - 30px)')}>Registrate</span></p>
        </div>
        <div className={log.dinamic} style={{transform: `translateX(${dinamic})`}}></div>
      </div>
      <Link to='/' className={log.back}>X</Link>
    </div>
  )
}

export default Login