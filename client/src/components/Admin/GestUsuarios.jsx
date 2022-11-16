import React, { useState } from "react";
import style from "./GestUsuarios.module.css";
import Profile from "../Profile/profile";
import { Link } from "react-router-dom";
import AdminAllUser from "../AdminManageUser/AdminAllUser";
import UserBenefits from "../AdminManageUser/UserBenefits";

const GestUsuarios = () => {

  const [administrar, setAdministrar] = useState(true)
  const [beneficios, setBeneficios] = useState(false)

  const switchHandler = (value) => {
    if(value === 'administrar'){
      setAdministrar(true)
      setBeneficios(false)
    } else if(value === 'beneficios'){
      setAdministrar(false)
      setBeneficios(true)
    }
  }

  return (
    <div className={style.admin}>
      {/* <Profile/> */}
      <div className={style.acciones}>
        <h3 className={style.h3}>Gestionar Usuarios</h3>
        <div className={style.info}>
          {/* <Link to="/admin/users/edit"> */}
            <button className={administrar ? style.btna : style.btn} onClick={() => switchHandler('administrar')}>Administrar</button>
          {/* </Link> */}
          {/* <button className={style.btn}>Upgradear Usuario</button> */}
          {/* <Link to="/admin/users/plan"> */}
            <button className={beneficios ? style.btna : style.btn} onClick={() => switchHandler('beneficios')}>Beneficios</button>
          {/* </Link> */}
          {/* <button className={style.btn}>Otorgar Permisos</button> */}
        </div>
      </div>
      <div>
        {administrar && <AdminAllUser/>}
        {beneficios && <UserBenefits/>}
      </div>
    </div>
  );
};

export default GestUsuarios;
