import React from 'react';
import syntheticLogo from '../img/LogoSintetico.png';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const [link, setLink] = useState('#2')
  let location = window.location.pathname;
  let user = useSelector((state) => state.user)
  
  useEffect(() => {
    location === '/' ? setLink('#2') : setLink('/sintetico')
  }, [location])

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Link to="/">
          <img className={style.logo} src={syntheticLogo} alt="logo" />
        </Link>
        <div className={style.containerLink}>
          <Link to="/">
            <p>Inicio</p>
          </Link>
          <Link to="/about">
            <p>Nosotros</p>
          </Link>
          <a href={link}><p>Ver Canchas</p></a>
        </div>
        {user.length === 0 ? <div className={style.inse}>
          <Link to='/login'>Iniciar Sesión</Link>
        </div> : <div className={style.inse2}><Link to='/profile'><div className={style.img}></div></Link></div>}
      </nav>
    </div>
  );
}