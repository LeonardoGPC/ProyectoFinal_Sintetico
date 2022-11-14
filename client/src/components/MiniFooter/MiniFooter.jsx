import React from "react";
import style from "./MiniFooter.module.css";

import { FiInstagram, FiFacebook  } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../img/balones.png'
import MP from '../img/mp.png'


const MiniFooter = () => {
  return (

    <div className={style.wrapper}>
        <div className={style.logoDer}>
          <img src={Logo} alt='logo' className={style.top}/> 
          <div className={style.derechos}>
            <p>© Derechos reservados.</p>
          </div> 
        </div>              
        <div className={style.socialGroup}>
          <FiInstagram className={style.socialIcon} />
          <FiFacebook className={style.socialIcon} />
          <AiOutlineWhatsApp className={style.socialIcon}/>
        </div>
        <div className={style.medios} >
          <p>MEDIOS DE PAGO</p>
          <img src={MP} alt="mercadopago" className={style.mp} />
        </div>
    </div>


  );
};

export default MiniFooter;