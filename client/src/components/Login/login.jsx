import React from 'react'
import log from './login.module.css'
import logo from '../img/balones.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/actions'
import Cookies from 'universal-cookie';
import axios from 'axios';

function Login() {

    const [dinamic, setDinamic] = useState('0')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const cookie = new Cookies()
    const [register, setRegister] = useState({
        name: '',
        lastName: '',
        phone: '',
        userName: '',
        email: '',
        password: '',
    })
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const registerHandler = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/users', register)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    const typingHandlerR = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/users/login', {userName: input.username, password: input.password})
        .then(response => response.data)
        .then(res => {
            cookie.set('usuario', res.userName)
            cookie.set('id', res.id)
            window.history.back()
        })
        .catch(error => alert('Algo salió mal :c'))
    }

    const loginHandler = (e) => {
        e.preventDefault()
        if(e.target.value === 'Usuario'){
            dispatch(userLogin('user'))
        } else if (e.target.value === 'Club'){
            dispatch(userLogin('club'))
        } else {
            dispatch(userLogin('admin'))
        }
    }

    const typingHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // const login = (e) => {
    //     console.log('submitt')
    //     e.preventDefault()
    //     const usuario = db.find(f => f.username === input.username && f.password === input.password)
    //     if(usuario){
    //         cookie.set('usuario', usuario.username)
    //         cookie.set('password', usuario.password)
    //         window.history.back()
    //     } else {
    //         alert('El usuario o contraseña es incorrecto')
    //     }
    // }

  return (
    <div className={log.main}>
      <div className={log.container}>   
        <div className={log.register}>
            <h2>Registrarse</h2>
            <form onSubmit={e => registerHandler(e)} className={log.form}>
                <div>
                    <p>Nombre</p>
                    <input type='text' className={log.inp} name='name' onChange={e => typingHandlerR(e)} autoComplete='off'/>
                </div>
                <div>
                    <p>Apellidos</p>
                    <input type='text' className={log.inp} name='lastname' onChange={e => typingHandlerR(e)} autoComplete='off'/>
                </div>
                <div>
                    <p>Teléfono</p>
                    <input type='text' className={log.inp} name='phone' onChange={e => typingHandlerR(e)} autoComplete='off'/>
                </div>
                <div>
                    <p>Usuario</p>
                    <input type='text' className={log.inp} name='userName' onChange={e => typingHandlerR(e)} autoComplete='off'/>
                </div>
                <div>
                    <p>Correo</p>
                    <input type='text' className={log.inp} name='email' onChange={e => typingHandlerR(e)} autoComplete='off'/>
                </div>
                <div>
                    <p>Contraseña</p>
                    <input type='password' className={log.inp} name='password' onChange={e => typingHandlerR(e)} autoComplete='off'/>
                </div>
                <div>
                    <p>Confirmar contraseña</p>
                    <input type='password' className={log.inp} autoComplete='off'/>
                </div>
                <div>
                    <input className={log.btn} type='submit' value='Registrarse'/>
                </div>
            </form>
            <p className={log.switch}>¿Ya tienes cuenta? <span onClick={() => setDinamic('0')}>Inicia sesión</span></p>
        </div>
        <div className={log.login}>
            <img src={logo} className={log.logo} alt='logo'/>
            {user.length === 0 ? <div>
            <h4>Inicia sesión con Google/Facebook</h4>
            <p className={log.division}>------------ o con tu usuario -----------</p>
            <form onSubmit={e => login(e)}>
                <div className={log.user}>
                    <p>Usuario:</p>
                    <input type='text' name='username' onChange={e => typingHandler(e)} autoComplete='off'/>
                </div>
                <div className={log.pass}>
                    <p>Contraseña:</p>
                    <input type='password' name='password' onChange={e => typingHandler(e)}/>
                </div>
                {/* <div className={log.button}>
                    <input type='button' value='Usuario' onClick={e => loginHandler(e)}/>
                    <input type='button' value='Club' onClick={e => loginHandler(e)}/>
                    <input type='button' value='Admin' onClick={e => loginHandler(e)}/>
                </div>             */}
                <div className={log.button}>
                    <input type='submit' value='Iniciar Sesión'/>
                </div> 
            </form>
            <p className={log.switch}>¿Aún no tienes cuenta? <span onClick={() => setDinamic('calc(100% - 30px)')}>Registrate</span></p>
            </div> : <div className={log.session}>
            <h2>Sesión iniciada correctamente</h2>
            <Link to='/' className={log.btn2}>Regresar al inicio</Link>    
            </div>}
        </div>
        <div className={log.dinamic} style={{transform: `translateX(${dinamic})`}}></div>
      </div>
      <div className={log.back} onClick={() => window.history.back()}>X</div>
    </div>
  )
}

export default Login