import React from "react";
import style from "./GestUsuarios.module.css";
import Profile from "../Profile/profile";
import { Link } from "react-router-dom";

const GestUsuarios = () => {
  return (
    <div className={style.admin}>
      <Profile />
      <div className={style.container}></div>
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Usuarios</h3>
        <div className={style.info}>
          <Link to="/admin/users/edit">
            <button className={style.btn}>Administrar usuarios</button>
          </Link>
          {/* <button className={style.btn}>Upgradear Usuario</button> */}
          <Link to="/admin/users/restrict">
            <button className={style.btn}>Restringir Usuario</button>
          </Link>
          <button className={style.btn}>Otorgar Permisos</button>
        </div>
      </div>
    </div>
  );
};

export default GestUsuarios;
