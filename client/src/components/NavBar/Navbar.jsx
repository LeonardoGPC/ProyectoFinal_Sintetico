import React from 'react';
import syntheticLogo from '../img/LogoSintetico.png';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Link to="/sintetico">
          <div className={style.containerLogo}>
            <img className={style.logo} src={syntheticLogo} alt="logo" />
          </div>
        </Link>
        <div className={style.containerLink}>
          <Link to="/clubs">
            <button className={style.linkUs}>Nosotros</button>
          </Link>
          <Link to="/login">
            <button className={style.linkLogin}>Iniciar sesion</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
