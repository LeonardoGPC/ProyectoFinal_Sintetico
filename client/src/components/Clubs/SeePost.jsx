import React from 'react';
import ReactStars from 'react-stars';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFields } from '../../redux/actions';
import style from './seePost.module.css';


export default function SeePost() {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);

 

  useEffect(() => {
    dispatch(getFields());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
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
                <ReactStars
                  edit={false}
                  value={field.score}
                  count={5}
                  size={24}
                  color2={'#98f576'}
                />
                <p className={style.description}>{field.description}</p>
              </div>
            </div>
            <div className={style.thirdContainer}>
              <p className={style.precio}>Precio: ${field.price}</p>
              <p className={style.localidad}>Localidad: {field.City.name}</p>
              <p className={style.tamaño}>Tamaño: futbol {field.Size.name}</p>
              <p className={style.superficie}>
                Superficie: {field.Surface.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
