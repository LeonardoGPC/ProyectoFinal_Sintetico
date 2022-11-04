import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../NavBar/Navbar'
import prof from './profile.module.css'
import foto from '../../img/foto_perfil.jpg'
import {ReservaUsuario} from '../Reservas/ReservaUsuario.jsx'
import Cookies from 'universal-cookie';

function Profile() {

    let user = useSelector((state) => state.user)
    const cookie = new Cookies()
    const usuario = cookie.get('usuario')

    const closeSesion = () => {
        cookie.remove('usuario')
        cookie.remove('password')
        window.location.replace("http://localhost:3000/")
    }

    if(typeof usuario === 'undefined'){
        window.location.replace("http://localhost:3000/login");
    } else {
      return (
        <div className={prof.main}>
            <Navbar/>
            <div className={prof.div}>
                { user === 'user' ? 
                <div className={prof.menu}>
                    <ul>
                        <li className={prof.profile}>
                            <img className={prof.img} src={foto} alt='imagen'/>
                            <h2 className={prof.name}>Leonardo Peña</h2>
                        </li>
                        <li className={prof.li}>Reservas</li>
                        <li className={prof.li}>Configuración</li>
                        
                    </ul>
                  
                    <p className={prof.li} onClick={() => closeSesion()}>Cerrar Sesión</p>
                     
                </div>
                 : user === 'club' ? 
                 <div className={prof.menu}>
                    <ul>
                        <li className={prof.profile}>
                            <img className={prof.img} src={foto} alt='imagen'/>
                            <h2 className={prof.name}>Leonardo Peña</h2>
                        </li>
                        <li className={prof.li}>Hacer Publicación</li>
                        <li className={prof.li}>Ver Publicaciones</li>
                        <li className={prof.li}>Gestionar mi plan</li>
                        <li className={prof.li}>Reservas </li>
                        <li className={prof.li}>Configuración</li>
                    </ul>
                    <p className={prof.li} onClick={() => closeSesion()}>Cerrar Sesión</p>
                </div>
                : 
                <div className={prof.menu}>
                    <ul>
                        <li className={prof.profile}>
                            <img className={prof.img} src={foto} alt='imagen'/>
                            <h2 className={prof.name}>Leonardo Peña</h2>
                        </li>
                        <li className={prof.li}>Gestionar Publicaciones</li>
                        <li className={prof.li}>Gestionar Usuarios</li>
                        <li className={prof.li}>Gestionar Precios</li>
                        <li className={prof.li}>Gestionar Reservas</li>
                        <li className={prof.li}>Configuración</li>

                    </ul>
                    <p className={prof.li} onClick={() => closeSesion()}>Cerrar Sesión</p>
                </div>}
                <div className={prof.content}>

                </div>
            </div>
            <div>
            <ReservaUsuario/>
            </div>
        </div>
      )
    }
}

export default Profile
