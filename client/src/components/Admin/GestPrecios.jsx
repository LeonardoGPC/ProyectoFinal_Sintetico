import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/profile";
import style from "./GestPrecios.module.css";
import AdminManagePlan from '../AdminManagePlan/AdminManagePlan.jsx'
import AdminEditPlan from '../AdminManagePlan/AdminEditPlan.jsx'
import AdminPlanStats from '../AdminManagePlan/AdminPlanStats.jsx'

const GestPrecios = () => {

  const [vigentes, setVigentes] = useState(true)
  const [precios, setPrecios] = useState(false)
  const [estadisticas, setEstadisticas] = useState(false)

  const switchHandler = (value) => {
    if(value === 'vigentes'){
      setVigentes(true)
      setPrecios(false)
      setEstadisticas(false)
    } else if(value === 'precios'){
      setVigentes(false)
      setPrecios(true)
      setEstadisticas(false)
    } else if(value === 'estadisticas'){
      setVigentes(false)
      setPrecios(false)
      setEstadisticas(true)
    }
  } 

  return (
    <div className={style.admin}>
      {/* <Profile/> */}
      <div className={style.container}></div>
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Precios</h3>
        <div className={style.info}>
          {/* <Link to="/admin/plan"> */}
            <button className={vigentes ? style.btna : style.btn} onClick={() => switchHandler('vigentes')}>Planes vigentes</button>
          {/* </Link> */}
          {/* <Link to="/admin/plan/edit"> */}
          <button className={precios ? style.btna : style.btn} onClick={() => switchHandler('precios')}>Modificar Precios</button>
          {/* </Link> */}
          {/* <Link to="/admin/plan/stats"> */}
          <button className={estadisticas ? style.btna : style.btn} onClick={() => switchHandler('estadisticas')}>Estadisticas</button>
          {/* </Link> */}
        </div>
      </div>
      <div>
        {vigentes && <AdminManagePlan/>}
        {precios && <AdminEditPlan/>}
        {estadisticas && <AdminPlanStats/>}
      </div>
    </div>
  );
};

export default GestPrecios;
