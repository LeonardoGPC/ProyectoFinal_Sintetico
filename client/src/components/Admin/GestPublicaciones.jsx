import React from "react";
import style from "./GestPublicaciones.module.css";
import Navbar from "../NavBar/Navbar";
import Profile from "../Profile/profile";
import { Link } from "react-router-dom";

const GestPublicaciones = () => {
  return (
    <div className={style.admin}>
      {/* <Profile/> */}
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Publicaciones</h3>
        <div className={style.info}>
          <Link to="/admin/fields/premium">
            <button className={style.btn} style={{ backgroundColor: "gold" }}>
              Publicaciones PREMIUM
            </button>
          </Link>
          <Link to="/admin/fields">
            <button className={style.btn}>Publicaciones Actuales</button>
          </Link>
          <Link to="/admin/fields/edit">
            <button className={style.btn}>Administrar Publicaciones</button>
          </Link>
          {/* <Link to="/admin/fields/stats">
            <button className={style.btn}>Estadisticas</button>
          </Link> */}
          <Link to="/admin/fields/deleted">
            <button className={style.btn}>Publicaciones eliminadas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GestPublicaciones;
