import React from "react";
import style from "./GestPublicaciones.module.css";
import Navbar from "../NavBar/Navbar";
import Profile from "../Profile/profile";
import { Link } from "react-router-dom";

const GestPublicaciones = () => {
  return (
    <div className={style.admin}>
      <Profile />
      <div className={style.container}></div>
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Publicaciones</h3>
        <div className={style.info}>
          <Link to="/admin/fields">
            <button className={style.btn}>Publicaciones Actuales</button>
          </Link>
          <Link to="/admin/fields/edit">
            <button className={style.btn}>Administrar Publicaciones</button>
          </Link>
          <Link to="/admin/fields/stats">
          <button className={style.btn}>Estadisticas</button>
          </Link>
          {/* <button className={style.btn}>Eliminar Publicación</button> */}
          {/* <button className={style.btn}>Modificar Publicación</button> */}
        </div>
      </div>
    </div>
  );
};

export default GestPublicaciones;
