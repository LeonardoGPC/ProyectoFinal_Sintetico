import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import { getCities } from '../../redux/actions';
import style from './create.module.css';

export default function Create() {
  const dispatch = useDispatch();
  const cities = useSelector((s) => s.cities);

  useEffect(() => {
    dispatch(getCities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className={style.contenedor}>
        <form className={style.contenedorFormulario}>
          <h1 className={style.tittle}>Crear cancha</h1>

          <div className={style.sections}>
            <div className={style.left}>
              <div className={style.group}>
                <label className={style.subtittle}>Nombre:</label>

                <input className={style.input} type="text" name="nombre" />
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Imagen:</label>

                <input className={style.input} type="text" name="imagen" />
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Precio:</label>

                <input className={style.input} type="text" name="precio" />
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Localidad:</label>
                <select className={style.input}>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Dirección:</label>
                <input className={style.input} type="text" name="direccion" />
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Tamaño:</label>
                <select className={style.input}>
                  <option value="Futbol 6">Futbol 6</option>
                  <option value="Futbol 7">Futbol 7</option>
                  <option value="Futbol 8">Futbol 8</option>
                  <option value="Futbol 9">Futbol 9</option>
                </select>
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Superficie:</label>
                <select className={style.input}>
                  <option value="Concreto">Concreto</option>
                  <option value="Parque">Parque</option>
                  <option value="Sintetico">Sintético</option>
                  <option value="Pasto natural">Pasto natural</option>
                </select>
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Apertura:</label>
                <input className={style.input} type="time" />
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Cierre:</label>
                <input className={style.input} type="time" />
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Descripción: </label>
                <textarea className={style.textarea} />
              </div>
              <div className={style.group}>
                <label className={style.subtittle}>Servicios:</label>
                <div className={style.itemsServicios}>
                  Ducha:
                  <input type="checkbox" name="ducha" value="ducha" />
                  <br />
                  Parqueadero:
                  <input
                    type="checkbox"
                    name="parqueadero"
                    value="parqueadero"
                  />
                  <br />
                  Elementos de aseo:
                  <input
                    type="checkbox"
                    name="elementosDeAseo"
                    value="elementosDeAseo"
                  />
                  <br />
                  piscina:{' '}
                  <input type="checkbox" name="piscina" value="piscina" />
                </div>
              </div>
            </div>
            <div className={style.right}>
              <img
                className={style.image}
                src="https://www.espaciosdeportivos.com.gt/wp-content/uploads/2020/08/canchas-futbol-5.jpg"
                alt="cancha"
              />
              <button type="submit" className={style.buttonCrear}>
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
