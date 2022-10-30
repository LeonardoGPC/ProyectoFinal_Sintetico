import React from 'react';
import ReactStars from 'react-stars';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFields } from '../../redux/actions';
import style from './cards.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

export default function Cards() {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  const [page, setPage] = useState(1);
 
  const itemsPerPage = 3;
  const fieldsByPage = fields.slice(0, page * itemsPerPage);

  useEffect(() => {
    dispatch(getFields());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={fieldsByPage.length}
      hasMore={fields.length !== fieldsByPage.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<h4>Loading...</h4>}
      height="657px"
      className={style.scroll}
    >
      <div className={style.container}>
        {fieldsByPage.map((field) => {
          return (
            <div>
            <Link key={field.id} className={style.group} to={`/sintetico/detail/${field.id}`}>
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
                  <p className={style.description}>
                    Disfruta de un muy buen partido de fútbol 6 con tus mejores
                    amigos o familiares, muestra todas tus habilidades en este
                    deporte y siéntete como todo un jugador prefesional en las
                    canchas que Bombonera tiene para ti. También podrás comprar
                    el servicio de alquiler de balón para tu práctica.
                  </p>
                </div>
              </div>
              <div className={style.thirdContainer}>
                <p className={style.precio}>Precio: ${field.price}</p>
                <p className={style.localidad}>Localidad: {field.City.name}</p>
                <p className={style.tamaño}>Tamaño: futbol {field.Size.name}</p>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}
