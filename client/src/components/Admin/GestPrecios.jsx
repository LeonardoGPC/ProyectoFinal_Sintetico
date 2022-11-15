import React from 'react'
import Profile from '../Profile/profile'
import style from './GestPrecios.module.css'

const GestPrecios = () => {
  return (
    <div className={style.admin}>
      <div className={style.container}></div>
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Precios</h3>
        <div className={style.info}>
          <button className={style.btn}>Actualizar Precios</button>
          <button className={style.btn}>Modificar Precios Planes</button>

          </div>
      </div>
    </div>
  )
}

export default GestPrecios