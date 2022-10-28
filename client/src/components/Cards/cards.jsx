import React from 'react';
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
                <div className={style.raiting}>
                  <p>
                    <input
                      id="radio1"
                      type="radio"
                      name="estrellas"
                      value="5"
                    />
                    <label htmlFor="radio1">★</label>
                    <input
                      id="radio2"
                      type="radio"
                      name="estrellas"
                      value="4"
                    />
                    <label htmlFor="radio2">★</label>
                    <input
                      id="radio3"
                      type="radio"
                      name="estrellas"
                      value="3"
                    />
                    <label htmlFor="radio3">★</label>
                    <input
                      id="radio4"
                      type="radio"
                      name="estrellas"
                      value="2"
                    />
                    <label htmlFor="radio4">★</label>
                    <input
                      id="radio5"
                      type="radio"
                      name="estrellas"
                      value="1"
                    />
                    <label htmlFor="radio5">★</label>
                  </p>
                </div>
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
              <p className={style.precio}>Precio: {field.price}</p>
              <p className={style.localidad}>Localidad: {field.CityId}</p>
              <p className={style.tamaño}>Tamaño: futbol {field.SizeId}</p>
            </div>
          </div>
        );
      })}
     
    </div>
  );
}
