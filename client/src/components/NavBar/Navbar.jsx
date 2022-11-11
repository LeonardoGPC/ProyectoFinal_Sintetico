import React from 'react';
import syntheticLogo from '../img/LogoSintetico.png';
import style from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import foto from '../../img/foto_perfil.jpg'
import { cleanErrors } from "../../redux/actions/index.js"
import cart from '../../img/cart.svg'
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Navbar() {

  const cookie = new Cookies()
  const usuario = cookie.get('usuario')
  const idUser = cookie.get('id')
  const [userImage, setUserImage] = useState({image: ''})

  const getUserData = async () => {
    let data = await axios.get('/users/' + idUser)
    setUserImage({image: data.data.image})
  }

  useEffect(() => {
    if(idUser){
      getUserData()
    }
}, [])

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
        <Link to='/pay'><img className={style.img2} src={cart}/></Link>
          <Link to='/login' className={style.inse_link}>Iniciar Sesión</Link>
        </div> : localStorage.length === 0 ? <div className={style.inse2}><Link to='/profile'><img className={style.img} src={userImage.image}/></Link></div>
        : <div className={style.inse2}>
          <Link to='/pay'><img className={style.img2} src={cart}/></Link>
          <Link to='/profile'><img className={style.img} src={foto}/></Link>
          </div>}
      </nav>
    </div>
  );
}