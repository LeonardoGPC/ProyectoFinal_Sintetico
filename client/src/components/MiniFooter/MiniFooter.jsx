import React from "react";
import style from "./MiniFooter.module.css";

import { FiInstagram, FiFacebook  } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../img/balones.png'


const MiniFooter = () => {
  return (

    <div className={style.wrapper}>
          <img src={Logo} alt='img not found' className={style.top}/> 
                        <div className={style.socialGroup}>
                            <FiInstagram className={style.socialIcon} />
                            <FiFacebook className={style.socialIcon} />
                            <AiOutlineWhatsApp className={style.socialIcon}/>
                        </div>
         <div className={style.derechos}>
            <p>© Derechos reservados.</p>
        </div>               
    </div>


  );
};

export default MiniFooter;