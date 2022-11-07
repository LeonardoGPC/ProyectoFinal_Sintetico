import React from 'react'
import style from './GestPublicaciones.module.css'
import Navbar from '../NavBar/Navbar'
import Profile from '../Profile/profile'



const GestPublicaciones = () => {
  return (
    <div className={style.admin}>
        <Profile />
      <div className={style.container}></div>
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Publicaciones</h3>
        <div className={style.info}>
          <button className={style.btn}>Publicaciones Actuales</button>
          <button className={style.btn}>Crear Publicación</button>
          <button className={style.btn}>Eliminar Publicación</button>
          <button className={style.btn}>Modificar Publicación</button>
          </div>
      </div>
    </div>
  )
}

export default GestPublicaciones