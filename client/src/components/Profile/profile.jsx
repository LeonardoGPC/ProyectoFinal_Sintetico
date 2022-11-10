import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../NavBar/Navbar'
import prof from './profile.module.css'
import Cookies from 'universal-cookie';
import GestPublicaciones from '../Admin/GestPublicaciones'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function Profile() {


    let user = useSelector((state) => state.user)
    const cookie = new Cookies()
    const usuario = cookie.get('usuario')
    const idUser = cookie.get('id')
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        userName: '',
        email: '',
        phone: '',
        image: '',
        type: ''
    })

    useEffect(() => {
        const getUserData = async () => {
            let data = await axios.get('http://localhost:3001/users/' + idUser)
            setUserData({
                name: data.data.name,
                lastName: data.data.lastName,
                userName: data.data.userName,
                email: data.data.email,
                phone: data.data.phone,
                image: data.data.image,
                type: data.data.type
            })
        }
        getUserData()
    }, [])

    const closeSesion = () => {
        cookie.remove('usuario')
        cookie.remove('id')
        window.location.replace("http://localhost:3000/")
    }

    if(typeof usuario === 'undefined'){
        window.location.replace("http://localhost:3000/login");
    } else {
      return (
        <div className={prof.main}>
            <Navbar/>
            <div className={prof.div}>
                { userData.type === 'user' ? 
                <div className={prof.menu}>
                    <ul>
                        <li className={prof.profile}>
                            <img className={prof.img} src={userData.image} alt='imagen'/>
                            <h2 className={prof.name}>{userData.name}</h2>
                        </li>
                        <li className={prof.li}>Reservas</li>
            
                        <li className={prof.li}>Configuración</li>
                        
                    </ul>
                  
                    <p className={prof.li} onClick={() => closeSesion()}>Cerrar Sesión</p>
                     
                </div>
                 : userData.type === 'club' ? 
                 <div className={prof.menu}>
                    <ul>
                        <li className={prof.profile}>
                            <img className={prof.img} src={userData.image} alt='imagen'/>
                            <h2 className={prof.name}>{usuario}</h2>
                        </li>
                        <li className={prof.li}><Link className={prof.link} to ='/create'>Hacer Publicación</Link></li>
                        <li className={prof.li}><Link className={prof.link} to='/verPublicaciones'>Ver Publicaciones</Link></li>
                        <li className={prof.li}><Link className={prof.link} to='/gestionarPlan'>Gestionar mi plan</Link></li>
                        <li className={prof.li}><Link className={prof.link} to='/reservas'>Reservas</Link></li>
                        <li className={prof.li}>Configuración</li>
                    </ul>
                    <p className={prof.li} onClick={() => closeSesion()}>Cerrar Sesión</p>
                </div>
                : 
                <div className={prof.menu}>
                    <ul>
                        <li className={prof.profile}>
                            <img className={prof.img} src={userData.image} alt='imagen'/>
                            <h2 className={prof.name}>{usuario}</h2>
                        </li>
                        <li className={prof.li}><Link className={prof.link} to ='/gestionarpublicaciones'>Gestionar Publicaciones</Link></li>
                        <li className={prof.li}><Link className={prof.link} to= '/gestionarusuarios'>Gestionar Usuarios</Link></li>
                        <li className={prof.li}><Link className={prof.link} to= '/gestionarprecios'>Gestionar Precios</Link></li>
                        <li className={prof.li}><Link className={prof.link} to='/gestionarreservas'>Gestionar Reservas</Link></li>
                        <li className={prof.li}>Configuración</li>

                    </ul>
                    <p className={prof.li} onClick={() => closeSesion()}>Cerrar Sesión</p>
                </div>}
                <div className={prof.content}>

                </div>
            </div>
            <div>
            
            </div>
        </div>
      )
    }
}

export default Profile
