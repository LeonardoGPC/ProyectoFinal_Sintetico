import React from "react";
import style from "./GestPublicaciones.module.css";
import Navbar from "../NavBar/Navbar";
import Profile from "../Profile/profile";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdminFields from "../AdminManageFields/AdminFields";
import AdminEditPremium from '../AdminManageFields/AdminEditPremium';
import AdminEdit from '../AdminManageFields/AdminEdit';
import AdminDeleted from '../AdminManageFields/AdminDeleted';

const GestPublicaciones = () => {

  const [premium, setPremium] = useState(true)
  const [actuales, setActuales] = useState(false)
  const [administrar, setAdministrar] = useState(false)
  const [eliminadas, setEliminadas] = useState(false)

  const switchHandler = (value) => {
    if(value === 'premium'){
      setPremium(true)
      setActuales(false)
      setAdministrar(false)
      setEliminadas(false)
    } else if(value === 'actuales'){
      setPremium(false)
      setActuales(true)
      setAdministrar(false)
      setEliminadas(false)
    } else if(value === 'administrar'){
      setPremium(false)
      setActuales(false)
      setAdministrar(true)
      setEliminadas(false)
    } else if(value === 'eliminadas'){
      setPremium(false)
      setActuales(false)
      setAdministrar(false)
      setEliminadas(true)
    }
  }

  return (
    <div className={style.admin}>
      {/* <Profile/> */}
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Publicaciones</h3>
        <div className={style.info}>
          {/* <Link to="/admin/fields/premium"> */}
            <button className={premium ? style.btnPA : style.btnP} onClick={() => switchHandler('premium')}>Premium</button>
          {/* </Link> */}
          {/* <Link to="/admin/fields"> */}
            <button className={actuales ? style.btna : style.btn} onClick={() => switchHandler('actuales')}>Actuales</button>
          {/* </Link> */}
          {/* <Link to="/admin/fields/edit"> */}
            <button className={administrar ? style.btna : style.btn} onClick={() => switchHandler('administrar')}>Administrar</button>
          {/* </Link> */}
          {/* <Link to="/admin/fields/stats">
            <button className={style.btn}>Estadisticas</button>
          </Link> */}
          {/* <Link to="/admin/fields/deleted"> */}
            <button className={eliminadas ? style.btna : style.btn} onClick={() => switchHandler('eliminadas')}>Eliminadas</button>
          {/* </Link> */}
        </div>
      </div>
      <div>
        {premium && <AdminEditPremium/>}
        {actuales && <AdminFields/>}
        {administrar && <AdminEdit/>}
        {eliminadas && <AdminDeleted/>}
      </div>
    </div>
  );
};

export default GestPublicaciones;
