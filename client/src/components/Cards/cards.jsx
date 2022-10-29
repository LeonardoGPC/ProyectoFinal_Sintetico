import React from 'react';
import ReactStars from 'react-stars';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFields } from '../../redux/actions';
import style from './cards.module.css';

export default function Cards() {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);

  useEffect(() => {
    dispatch(getFields());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <i class="fa-thin fa-star"></i>

      {fields.map((field) => {
        return (
          <div key={field.id} className={style.group}>
            <div className={style.secondContainer}>
              <img
                className={style.image}
                src={field.image}
                alt="imagenCancha"
              />
              <div className={style.containerDescription}>
                <h1 className={style.titulo}>{field.name}</h1>
                <ReactStars edit={false} value={field.score} count={5} size={24} color2={'#ffd700'} />
                <p className={style.description}>
                  Disfruta de un muy buen partido de fútbol 6 con tus mejores
                  amigos o familiares, muestra todas tus habilidades en este
                  deporte y siéntete como todo un jugador prefesional en las
                  canchas que Bombonera tiene para ti. También podrás comprar el
                  servicio de alquiler de balón para tu práctica.
                </p>
              </div>
            </div>
            <div className={style.thirdContainer}>
              <p className={style.precio}>Precio: ${field.price}</p>
              <p className={style.localidad}>Localidad: {field.City.name}</p>
              <p className={style.tamaño}>Tamaño: futbol {field.Size.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
