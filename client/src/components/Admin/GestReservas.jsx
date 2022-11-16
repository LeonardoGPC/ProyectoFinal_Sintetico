import React from 'react'
import Profile from '../Profile/profile'
import style from './GestReservas.module.css'

const GestReservas = () => {
  return (
    <div className={style.admin}>
      {/* <Profile/> */}
  <div className={style.container}></div>
  <div className={style.acciones}>
    <h3 className={style.h3}>Gestionar Reservas</h3>
    <div className={style.info}>
      <button className={style.btn}>Historial de Reservas</button>
      <button className={style.btn}>Ocultar Reserva</button>
      <button className={style.btn}>Modificar Reserva</button>
      <button className={style.btn}>Cancelar Reserva</button>
      </div>
  </div>
</div>
  )
}

export default GestReservas