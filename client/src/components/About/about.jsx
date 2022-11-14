import React from 'react'
import Navbar from '../NavBar/Navbar.jsx'
import abt from './about.module.css'
import MiniFotter from '../MiniFooter/MiniFooter.jsx'

function About() {
  return (
    <div className={abt.main}>
      <Navbar/>
      <div className={abt.container}>
        <div className={abt.text}>
          <p>Sintetico es una Single-Page Application que facilita en pocos clicks la reserva de turnos de canchas de fútbol para los jugadores.<br/> A su vez permite la publicación y administración de canchas de forma ágil y rápida para los clubes que contraten un plan.<br/><br/> Ha sido desarrollada como trabajo final en el bootcamp de Full Stack Developer de Henry y se implementaron tecnologías como React, Redux, Sequelize, Express, Javascript, PostgreSQL, pasarela de pagos MercadoPago, EmailJS, Autenticación JWT y Auth0 (Google), BcryptJS, Cloudinary, Material UI.</p><br/>
        </div>
        <h3>Equipo de desarrolladores</h3>
        <div className={abt.players}>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422140/sintetico/agus_ayqfwp.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422140/sintetico/carla_d5peau.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422139/sintetico/gian_gck9ow.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422139/sintetico/Gina_1_z3bmga.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
          </div>
        <div className={abt.players}>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422139/sintetico/Leo_onkmaj.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668425598/sintetico/mauro_1_qd956u.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422140/sintetico/Maxi_zn2iqv.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422139/sintetico/Nico_1_nde4zx.png" alt="Agustin" className={abt.card}/>
            <div className={abt.profileLinks}>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" className={abt.linkProfile} />
              </a>
              <a href="">
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422915/sintetico/github_sliu0u.png" alt="linkdin" className={abt.linkProfile} />
              </a>              
            </div>
          </div>
        </div>
      
      </div>
      <svg className={abt.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#404040" fill-opacity="1" d="M0,0L60,5.3C120,11,240,21,360,37.3C480,53,600,75,720,69.3C840,64,960,32,1080,21.3C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <MiniFotter/>
    </div>
  )
}

export default About