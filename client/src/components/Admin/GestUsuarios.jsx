import React from 'react'
import style from './GestUsuarios.module.css'
import Profile from '../Profile/profile'



const GestUsuarios = () => {
  return (
    <div className={style.admin}>
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Usuarios</h3>
        <div className={style.info}>
          <button className={style.btn}>Cambiar Plan</button>
          <button className={style.btn}>Upgradear Usuario</button>
          <button className={style.btn}>Restringir Usuario</button>
          <button className={style.btn}>Otorgar Permisos</button>
          </div>
      </div>
    </div>
  )
}

export default GestUsuarios