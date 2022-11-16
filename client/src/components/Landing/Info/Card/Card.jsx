import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Autoplay } from "swiper"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import s from "./Card.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { getFields } from "../../../../redux/actions/index"
import ReactStars from 'react-stars';

export default function Carousel () {


    const dispatch = useDispatch()
    const fieldState = useSelector((state) => state.fields);
    // const fieldsApproved = fieldState.filter((f) => f.state === "APPROVED");
    const fieldsApproved = fieldState.filter((f) => f.User.planType === "premium");
    
    useEffect(() => {
        dispatch(getFields());
      }, []);
      
    return (
        <div className={s.body} id='2'>
            <div className={s.container}>
                <Swiper freeMode={true} grabCursor={true} autoplay={{delay: 3000}} modules={[FreeMode, Autoplay]} className={s.mySwiper} slidesPerView={3} spaceBetween={60}> 
                    {fieldsApproved.map(t => (
                        <SwiperSlide>
                            <div className={s.card} key={t.id}>
                                <div>
                                    <img src={t.image} alt={t.name} className={s.img}/>
                                </div>
                                <div className={s.infoContainer}>
                                    <div className={s.izquierda}>
                                        <h1>{t.name}</h1>
                                        <div className={s.stars}>
                                            {/* <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-regular fa-star"></i> */}
                                            <ReactStars
                                                count={5}
                                                value={t.score}
                                                size={24}
                                                edit={false}
                                                color2={'#ffd700'}
                                            />
                                        </div>
                                        <h4 className={s.address} >{t.address}</h4>
                                    </div>
                                    <div className={s.derecha}>
                                        <span className={s.iconsData}>
                                            <i class="fa-solid fa-person"></i>
                                            <span>{t.Size.name}</span>  
                                        </span>
                                        <span className={s.iconsData}>
                                            <i class="fa-solid fa-dollar-sign"></i>
                                            <span>{t.price}</span>
                                        </span>
                                        <span className={s.iconsData}>
                                            <i class="fa-solid fa-ruler"></i>
                                            <span>{t.Surface.name}</span>
                                        </span>
                                    </div>
                                </div>
                                <Link to={`/sintetico/detail/${t.id}`} className={s.button}> Rentar
                                    {/* <button className={s.button}>Rentar</button> */}
                                </Link> 
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Link to='/sintetico' className={s.cta}>Ver más</Link>
        </div>
    )
}