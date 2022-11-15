import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/profile";
import style from "./GestPrecios.module.css";

const GestPrecios = () => {
  return (
    <div className={style.admin}>
      <Profile />
      <div className={style.container}></div>
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Precios</h3>
        <div className={style.info}>
          <Link to="/admin/plan">
            <button className={style.btn}>Ver planes vigentes</button>
          </Link>
          <Link to="/admin/plan/edit">
          <button className={style.btn}>Modificar Precios Planes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GestPrecios;
