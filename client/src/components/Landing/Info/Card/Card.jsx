import React from "react"
import { Link } from "react-router-dom"
import s from "./Card.module.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Card ({teams}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    return (
        <div className={s.body}>
          <div className={s.container} > 
            <Slider {...settings}>
            {teams.map(t => (
              
            <div className={s.card} key={t.id}>
                <div className={s.cardTop} >
                    <img src={t.image} alt={t.name} className={s.img}/>
                    <div className={s.h1}>
                    <h1>{t.name}</h1>
                    <div className={s.stars}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    </div>
                    </div>
                </div>
                <div className={s.cardBottom}>
                  <div className={s.izquierda}>
                    <span className={s.address}>{t.address}</span>
                  </div>
                  <div className={s.derecha}>
                    <i class="fa-solid fa-ruler">{t.surfaces}</i>
                    <i class="fa-solid fa-dollar-sign">{t.price}</i>
                    <i class="fa-solid fa-person">{t.sizes}</i> 
                  </div>
                </div>
                <Link to={`/sintetico/detail/${t.id}`}>
                <button className={s.button}>Alquilar</button>
                </Link>
            </div>
            ))}
            </Slider>
        </div>
      </div>
    )
}

