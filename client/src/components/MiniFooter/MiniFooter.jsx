import React from "react";
import style from "./MiniFooter.module.css";
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook  } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../img/balones.png'
import MP from '../img/mp.png'


const MiniFooter = () => {

  const click = (value) => {
    if(value === 'insta'){
      let insta = document.getElementById('insta_ico')
      insta.click()
    } else if(value === 'face'){
      let face = document.getElementById('face_ico')
      face.click()
    } else if(value === 'whats'){
      let whats = document.getElementById('whats_ico')
      whats.click()
    }
  }

  return (
    <div className={style.wrapper}>
        <div className={style.logoDer}>
          <Link to="/diegol">
            <img src={Logo} alt='logo' className={style.top}/> 
          </Link>
          <div className={style.derechos}>
            <p>© Derechos reservados.</p>
          </div> 
        </div>              
        <div className={style.socialGroup}>
          <a style={{display: 'none'}} id='insta_ico' href="https://www.instagram.com/sintetico_ac/" target='_blank'/>
          <a style={{display: 'none'}} id='face_ico' href="https://www.facebook.com/people/Sintetico/100087782169985/" target='_blank'/>
          <a style={{display: 'none'}} id='whats_ico' href="https://wtsi.me/543517410220" target='_blank'/>
          <FiInstagram className={style.socialIcon} onClick={() => click('insta')}/>
          <FiFacebook className={style.socialIcon} onClick={() => click('face')}/>
          <AiOutlineWhatsApp className={style.socialIcon} onClick={() => click('whats')}/>
        </div>
        <div className={style.medios} >
          <p>MEDIOS DE PAGO</p>
          <img src={MP} alt="mercadopago" className={style.mp} />
        </div>
    </div>


  );
};

export default MiniFooter;