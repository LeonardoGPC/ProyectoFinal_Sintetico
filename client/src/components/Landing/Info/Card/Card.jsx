import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Autoplay } from "swiper"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import s from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Carousel ({teams}) {
    return (
        <div className={s.body}>
            <div className={s.container}>
                <Swiper freeMode={true} grabCursor={true} autoplay={{delay: 3000}} modules={[FreeMode, Autoplay]} className={s.mySwiper} slidesPerView={3} spaceBetween={60}> 
                    {teams.map(t => (
                        <SwiperSlide>
                            <div className={s.card} key={t.id}>
                                <div>
                                    <img src={t.image} alt={t.name} className={s.img}/>
                                </div>
                                <div className={s.infoContainer}>
                                    <div className={s.izquierda}>
                                        <h1>{t.name}</h1>
                                        <div className={s.stars}>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </div>
                                        <h4 className={s.address} >{t.address}</h4>
                                    </div>
                                    <div className={s.derecha}>
                                        <span className={s.iconsData}>
                                            <i class="fa-solid fa-person"></i>
                                            <span>{t.sizes}</span>
                                        </span>
                                        <span className={s.iconsData}>
                                            <i class="fa-solid fa-dollar-sign"></i>
                                            <span>{t.price}</span>
                                        </span>
                                        <span className={s.iconsData}>
                                            <i class="fa-solid fa-ruler"></i>
                                            <span>{t.surfaces}</span>
                                        </span>
                                    </div>
                                </div>
                                <Link to={`/sintetico/detail/${t.id}`}>
                                    <button className={s.button}>Rentar</button>
                                </Link> 
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}