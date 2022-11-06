import React from 'react';
import syntheticLogo from '../img/LogoSintetico.png';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import foto from '../../img/foto_perfil.jpg'
import { cleanErrors } from "../../redux/actions/index.js"
import cart from '../../img/cart.svg'
import Cookies from 'universal-cookie';

export default function Navbar() {

  const cookie = new Cookies()
  const usuario = cookie.get('usuario')

  const dispatch = useDispatch()
  function handleErrors(){
    dispatch(cleanErrors())
}
  // const [link, setLink] = useState('/#2')
  let location = window.location.pathname;
  let user = useSelector((state) => state.user)
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
          <Link to="/">
            <p>Inicio</p>
          </Link>
          <Link to="/about">
            <p>Nosotros</p>
          </Link>
          {/* <Link to={link}><p>Ver Canchas</p></Link> */}
          {location === '/' ? <a href='#2'><p>Ver canchas</p></a> : <Link to='/sintetico'><p>Ver Canchas</p></Link> }
        </div>
        {typeof usuario === 'undefined' ? localStorage.length === 0 ? <div className={style.inse}>
          <Link to='/login' className={style.inse_link}>Iniciar Sesión</Link>
        </div> : <div className={style.inse}>
        <Link to='/pay'><img className={style.img2} src={cart}/></Link>
          <Link to='/login' className={style.inse_link}>Iniciar Sesión</Link>
        </div> : localStorage.length === 0 ? <div className={style.inse2}><Link to='/profile'><img className={style.img} src={foto}/></Link></div>
        : <div className={style.inse2}>
          <Link to='/pay'><img className={style.img2} src={cart}/></Link>
          <Link to='/profile'><img className={style.img} src={foto}/></Link>
          </div>}
      </nav>
    </div>
  );
}