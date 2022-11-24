import React from 'react'
import log from './login.module.css'
import logo from '../img/balones.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/actions'
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useEffect } from 'react'
import { validate } from './validate'
import jwt_decode from "jwt-decode";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
const clientId = '314902110720-vpf55cs6jct5bj439gs0qa6h1ib35gms.apps.googleusercontent.com'

function Login() {
   
    useEffect(() => {
        const initClient = () => {
                gapi.client.init({
                clientId: clientId,
                scope: ''
            });
            };
            gapi.load('client:auth2', initClient);
    });

    async function responseGoogle (response){
        // var userObject = jwt_decode(response.credential);
        var object = {
          email: response.profileObj.email,
          userName: response.profileObj.name,
          lastName: response.profileObj.familyName,
          name: response.profileObj.givenName,
          image: response.profileObj.imageUrl,
          googleId: response.profileObj.googleId
  
      }
        var {data: {id}} = await axios.post('/users/googleAuth', object);
        cookie.set('usuario', object.userName)
        cookie.set('id', id)
        window.history.back()
      }

    // const google = window.google;
    
    // async function handleCallBackResponse(response){
    //     var userObject = jwt_decode(response.credential);
    //     var object = {
    //         email: userObject.email,
    //         userName: userObject.name,
    //         lastName: userObject.family_name,
    //         name: userObject.given_name,
    //         image: userObject.picture,
    //         googleId: userObject.sub
            
    //     }
    //     console.log(object)
    //     var {data: {id}} = await axios.post('/users/googleAuth', object);
    //     cookie.set('usuario', object.userName)
    //     cookie.set('id', id)
    //     window.history.back()
    // }
    // useEffect(()=>{
    //     google.accounts.id.initialize({
    //         client_id: '953309372189-7c7r2om3ll3jtpj5qqpmipos5rsddkq2.apps.googleusercontent.com',
    //         callback: handleCallBackResponse
    //     });
    //     google.accounts.id.renderButton(document.getElementById("signInDiv"),
    //     {theme: "outline", size: "large", });
    // }, []);
   
    const [dinamic, setDinamic] = useState('0')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const cookie = new Cookies()
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [val, setVal] = useState(true)
    const [register, setRegister] = useState({
        name: '',
        lastName: '',
        phone: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [input, setInput] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState({
        name: '',
        lastName: '',
        phone: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const time = () => {
        setDinamic('0')
        setModal(false)
        setModal2(false)
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        await axios.post('/users', register, /* {withCredentials: true} */)
        .then(response => {
            setModal(true)
            setRegister({
            name: '',
            lastName: '',
            phone: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        setTimeout(time, 5000)
        })
        .catch(error => console.log(error))
    }

    const typingHandlerR = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
        validate(e.target, setError, error, register)
    }

    const login = (e) => {
        e.preventDefault()
        axios.post('/users/login',{userName: input.username, password: input.password}/* , {withCredentials: true } */)
        .then(response => {
            return response.data;
        })
        .then(res => {
            cookie.set('usuario', res.userName)
            cookie.set('id', res.id)
            window.history.back()
        })
        .catch(error => {
            console.log(error);

            setInput({
                username: '',
                password: ''
            })
            setModal2(true)
        })
    }

    const typingHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(error.name.length === 0 && error.lastName.length === 0 && error.phone.length === 0 && error.userName.length === 0 && error.email.length === 0 && error.password.length === 0 && error.confirmPassword.length === 0){
            if(register.name.length > 0 && register.lastName.length > 0 && register.phone.length > 0 && register.userName.length > 0 && register.email.length > 0 && register.password.length > 0 && register.confirmPassword.length > 0){
                setVal(false)
            } else {
                setVal(true)
            }
        } else {
            setVal(true)
        }
    }, [error])

    const popUp = () => {
        setDinamic('0')
        setModal(false)
        setModal2(false)
    }

  return (
    <div className={log.main}>
      <div className={log.container}>   
        <div className={log.register}>
            <h2>Registrarse</h2>
            <form onSubmit={e => registerHandler(e)} className={log.form}>
                <div>
                    <p>Nombre</p>
                    <input type='text' className={log.inp} name='name' onChange={e => typingHandlerR(e)} autoComplete='off' value={register.name}/>
                    {error.name.length > 0 && <label>{error.name}</label>}
                </div>
                <div>
                    <p>Apellidos</p>
                    <input type='text' className={log.inp} name='lastName' onChange={e => typingHandlerR(e)} autoComplete='off' value={register.lastName}/>
                    {error.lastName.length > 0 && <label>{error.lastName}</label>}
                </div>
                <div>
                    <p>Teléfono</p>
                    <input type='text' className={log.inp} name='phone' onChange={e => typingHandlerR(e)} autoComplete='off' value={register.phone}/>
                    {error.phone.length > 0 && <label>{error.phone}</label>}
                </div>
                <div>
                    <p>Usuario</p>
                    <input type='text' className={log.inp} name='userName' onChange={e => typingHandlerR(e)} autoComplete='off' value={register.userName}/>
                    {error.userName.length > 0 && <label>{error.userName}</label>}
                </div>
                <div>
                    <p>Correo</p>
                    <input type='text' className={log.inp} name='email' onChange={e => typingHandlerR(e)} autoComplete='off' value={register.email}/>
                    {error.email.length > 0 && <label>{error.email}</label>}
                </div>
                <div>
                    <p>Contraseña</p>
                    <input type='password' className={log.inp} name='password' onChange={e => typingHandlerR(e)} autoComplete='off' value={register.password}/>
                    {error.password.length > 0 && <label>{error.password}</label>}
                </div>
                <div>
                    <p>Confirmar contraseña</p>
                    <input type='password' className={log.inp} name='confirmPassword' onChange={e => typingHandlerR(e)} autoComplete='off' value={register.confirmPassword}/>
                    {error.confirmPassword.length > 0 && <label>{error.confirmPassword}</label>}
                </div>
                <div>
                    <input className={log.btn} type='submit' value='Registrarse' disabled={val}/>
                </div>
            </form>
            <p className={log.switch}>¿Ya tienes cuenta? <span onClick={() => setDinamic('0')}>Inicia sesión</span></p>
        </div>
        <div className={log.login}>
            <img src={logo} className={log.logo} alt='logo'/>
            {user.length === 0 ? <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div id="signInDiv"></div> 
            <GoogleLogin
                clientId={clientId}
                buttonText="Inicia sesión con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />           
            <p className={log.division}>------------ o con tu usuario -----------</p>
            <form onSubmit={e => login(e)}>
                <div className={log.user}>
                    <p>Usuario:</p>
                    <input type='text' name='username' onChange={e => typingHandler(e)} autoComplete='off' value={input.username}/>
                </div>
                <div className={log.pass}>
                    <p>Contraseña:</p>
                    <input type='password' name='password' onChange={e => typingHandler(e)} value={input.password}/>
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
      {modal && <div className={log.modal_main}>
                <div className={log.modal_box}>
                    <p>¡Usuario registrado con éxito!</p>
                    <h1>✔️</h1>
                    <div className={log.modal_btns}>
                        <button onClick={() => popUp()}>¡Bien!</button>
                    </div>
                </div>
            </div>}
      {modal2 && <div className={log.modal_main}>
                <div className={log.modal_box}>
                    <p>El usuario o contraseña es incorrecto</p>
                    <h2 className={log.equis}>❌</h2>
                    <div className={log.modal_btns}>
                        <button onClick={() => popUp()}>Reintentar</button>
                    </div>
                </div>
            </div>}
    </div>
  )
}

export default Login