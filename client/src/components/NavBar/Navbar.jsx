import React from 'react';
import syntheticLogo from '../img/LogoSintetico.png';
import style from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanErrors } from "../../redux/actions/index.js"
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from "../Cart/Cart";

export default function Navbar({userData}) {

  const cookie = new Cookies()
  const usuario = cookie.get('usuario')
  const idUser = cookie.get('id')
  const [userImage, setUserImage] = useState({image: ''})

  const getUserData = async (userData) => {
    let data;
    if(userData) setUserImage({image : userData.image})
    else{data = await axios.get(`/users/${idUser}`);
    setUserImage({image: data.data.image})}
  }
  
  useEffect(() => {
    if(idUser){
      getUserData(userData)
    }
}, [userData])

  const dispatch = useDispatch()
  function handleErrors(){
    dispatch(cleanErrors())
}
  // const [link, setLink] = useState('/#2')
  let location = window.location.pathname;
  // let user = useSelector((state) => state.user)
  // useEffect(() => {
  //   location === '/' ? setLink('/#2') : setLink('/sintetico')
  // }, [location])

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Link to="/">
          <img className={style.logo} src={syntheticLogo} alt="logo" onClick={() => handleErrors()}/>
        </Link>
        <div className={style.containerLink}>
          <NavLink to="/">
            <p>Inicio</p>
          </NavLink>
          <NavLink to="/about">
            <p>Nosotros</p>
          </NavLink>
          {/* <Link to={link}><p>Ver Canchas</p></Link> */}
          {location === '/' ? <a href='#2'><p>Ver canchas</p></a> : <NavLink to='/sintetico'><p>Ver Canchas</p></NavLink> }
        </div>
        {typeof usuario === 'undefined' ? localStorage.length === 0 ? <div className={style.inse}>
          <Link to='/login' className={style.inse_link}>Iniciar Sesión</Link>
        </div> : <div className={style.inse}>
        <Link to='/pay'><Cart /></Link>
          <Link to='/login' className={style.inse_link}>Iniciar Sesión</Link>
        </div> : localStorage.length === 0 ? <div className={style.inse2}><Link to='/profile'><img className={style.img} src={userImage.image} alt="profile"/></Link></div>
        : <div className={style.inse2}>
          <Link to='/pay'><Cart /></Link>
          <Link to='/profile'><img className={style.img} src={userImage.image} alt="profile"/></Link>
          </div>}
      </nav>
    </div>
  );
}