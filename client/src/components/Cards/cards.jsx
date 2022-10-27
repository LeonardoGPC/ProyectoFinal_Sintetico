import React from 'react';
import style from './cards.module.css';

export default function Cards() {
  return (
    <div className={style.container}>
      <div className={style.group}>
        <div className={style.secondContainer}>
          <img
            className={style.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZi6Y1bC_ZJ8KY0QetsO0PsaEL0EwGpE_CjPr8_4iPOxZnjx1VCkm2y_QtlRLEcVplfA&usqp=CAU"
            alt="imagenCancha"
          />
          <div className={style.containerDescription}>
            <h1 className={style.titulo}>Bombonera</h1>
            <div className={style.raiting}>
              <p class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5" />
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4" />
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3" />
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2" />
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1" />
                <label for="radio5">★</label>
              </p>
            </div>
            <p className={style.description}>
              Disfruta de un muy buen partido de fútbol 6 con tus mejores amigos
              o familiares, muestra todas tus habilidades en este deporte y
              siéntete como todo un jugador prefesional en las canchas que
              Bombonera tiene para ti. También podrás comprar el servicio de
              alquiler de balón para tu práctica.
            </p>
          </div>
        </div>
        <div className={style.thirdContainer}>
          <p className={style.precio}>Precio</p>
          <p className={style.localidad}>Localidad</p>
          <p className={style.tamaño}>Futbol 6</p>
        </div>
      </div>
      <div className={style.group}>
        <div className={style.secondContainer}>
          <img
            className={style.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZi6Y1bC_ZJ8KY0QetsO0PsaEL0EwGpE_CjPr8_4iPOxZnjx1VCkm2y_QtlRLEcVplfA&usqp=CAU"
            alt=""
          />
          <div className={style.containerDescription}>
            <h1 className={style.titulo}>Juventus</h1>
            <p className={style.raiting}></p>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label for="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label for="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label for="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label for="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label for="radio5">★</label>
            </p>

            <p className={style.description}>
              Disfruta de un muy buen partido de fútbol 7 con tus mejores amigos
              o familiares, muestra todas tus habilidades en este deporte y
              siéntete como todo un jugador prefesional en las canchas que
              Juventus tiene para ti. También podrás comprar el servicio de
              alquiler de balón para tu práctica.
            </p>
          </div>
        </div>
        <div className={style.thirdContainer}>
          <p className={style.precio}>Precio</p>
          <p className={style.localidad}>Localidad</p>
          <p className={style.tamaño}>Futbol 7</p>
        </div>
      </div>
      <div className={style.group}>
        <div className={style.secondContainer}>
          <img
            className={style.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZi6Y1bC_ZJ8KY0QetsO0PsaEL0EwGpE_CjPr8_4iPOxZnjx1VCkm2y_QtlRLEcVplfA&usqp=CAU"
            alt=""
          />
          <div className={style.containerDescription}>
            <h1 className={style.titulo}>Las estrellas</h1>
            <p className={style.raiting}></p>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label for="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label for="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label for="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label for="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label for="radio5">★</label>
            </p>
            <p className={style.description}>
              Disfruta de un muy buen partido de fútbol 8 con tus mejores amigos
              o familiares, muestra todas tus habilidades en este deporte y
              siéntete como todo un jugador prefesional en las canchas que las
              estrellas tiene para ti. También podrás comprar el servicio de
              alquiler de balón para tu práctica.
            </p>
          </div>
        </div>
        <div className={style.thirdContainer}>
          <p className={style.precio}>precio</p>
          <p className={style.localidad}>localidad</p>
          <p className={style.tamaño}>Futbol 8</p>
        </div>
      </div>
      <div className={style.group}>
        <div className={style.secondContainer}>
          <img
            className={style.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZi6Y1bC_ZJ8KY0QetsO0PsaEL0EwGpE_CjPr8_4iPOxZnjx1VCkm2y_QtlRLEcVplfA&usqp=CAU"
            alt=""
          />
          <div className={style.containerDescription}>
            <h1 className={style.titulo}>Futbolin</h1>
            <p className={style.raiting}></p>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label for="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label for="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label for="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label for="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label for="radio5">★</label>
            </p>
            <p className={style.description}>
              Disfruta de un muy buen partido de fútbol 9 con tus mejores amigos
              o familiares, muestra todas tus habilidades en este deporte y
              siéntete como todo un jugador prefesional en las canchas que
              Futbolin tiene para ti. También podrás comprar el servicio de
              alquiler de balón para tu práctica.
            </p>
          </div>
        </div>
        <div className={style.thirdContainer}>
          <p className={style.precio}>precio</p>
          <p className={style.localidad}>localidad</p>
          <p className={style.tamaño}>Futbol 9</p>
        </div>
      </div>
    </div>
  );
}
