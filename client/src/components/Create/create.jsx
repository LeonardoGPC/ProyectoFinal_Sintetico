import React from 'react';
import style from './create.module.css';

export default function Create() {
  return (
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
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Cordoba">Cordoba</option>
                <option value="Rosario">Rosario</option>
                <option value="Mar de Plata">Mar de Plata</option>
                <option value="Salta">Salta</option>
                <option value="Santa Fe">Santa Fe</option>
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
                <input type="checkbox" name="parqueadero" value="parqueadero" />
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
            <button type="submit" className={style.buttonCrear}>Crear</button>
          </div>
        </div>
      </form>
    </div>
  );
}
