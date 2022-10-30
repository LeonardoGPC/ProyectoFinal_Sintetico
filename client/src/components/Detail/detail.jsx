import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../NavBar/Navbar";
import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { getFieldDetail } from "../../redux/actions";
import MiniFooter from "../MiniFooter/MiniFooter";
import map from "../../img/icons/map.png";
import buffet from "../../img/icons/buffet.png";
import duchas from "../../img/icons/duchas.png";
import estacionamiento from "../../img/icons/estacionamiento.png";
import quincho from "../../img/icons/quincho.png";
import { Rate } from "antd";
import ReactStars from "react-stars";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailField = useSelector((state) => state.detail);
  console.log(detailField);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
    alert(`Hiciste una puntuación de ${value} estrellas`);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  useEffect(() => {
    dispatch(getFieldDetail(id));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {detailField ? (
        <div className={styles.detail}>
          <div className={styles.card}>
            <div className={styles.cardContainer}>
              <figure className={styles.image}>
                {/* <button>←</button> */}
                <img src={detailField.image} alt="cancha" />
                {/* <button>→</button> */}
              </figure>
              <div className={styles.info}>
                <div className={styles.title}>
                  <h3 className={styles.name}>{detailField.name}</h3>
                  <button className={styles.button}>X</button>
                </div>
                <div className={styles.content}>
                  <ul>
                    <li>Rating: {detailField.score}</li>
                    {/* <li><Rate disabled allowHalf value={detailField.score} character="★" style={{ fontSize: 30}}/></li> */}
                    <li>
                      <ReactStars
                        count={5}
                        value={detailField.score}
                        size={24}
                        edit={false}
                        color2={"#ffd700"}
                      />
                    </li>
                    <li className={styles.facilities}>
                      {detailField.Facilities?.map((el) => {
                        return (
                          <p
                            className={styles.facilitieIcon}
                            style={{ margin: 3 }}
                          >
                            {el.name === "Duchas" ? (
                              <img
                                src={duchas}
                                style={{ height: 25 }}
                                alt={el.name}
                              />
                            ) : el.name === "Estacionamiento" ? (
                              <img
                                src={estacionamiento}
                                style={{ height: 25 }}
                              />
                            ) : el.name === "Buffet" ? (
                              <img src={buffet} style={{ height: 25 }} />
                            ) : (
                              <img src={quincho} style={{ height: 25 }} />
                            )}
                          </p>
                        );
                      })}
                    </li>

                    <li>
                      Cancha para {detailField.Size ? detailField.Size.name : 0}{" "}
                      jugadores
                    </li>
                    {/* <li>Tipo de suelo: {detailField.Surface ? detailField.Surface.name : "Sin información"}</li> */}
                    <li>
                      <img src={map} style={{ height: 25 }} />{" "}
                      {detailField.address},{" "}
                      {detailField.City ? detailField.City.name : ""}
                    </li>
                  </ul>
                  <div className={styles.description}>
                    <p>{detailField.description}</p>
                    <span className={styles.price}>
                      <p>${detailField.price}</p>
                      <button>Reservar</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.review}>
            <h3>Comentarios</h3>
            <div className={styles.container}>
              <div className={styles.comment}>
                <div className={styles.userData}>
                  <figure className={styles.user}>
                    <img
                      src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="foto de perfil"
                      className={styles.profile}
                    />
                    <p>Nombre</p>
                  </figure>
                  <p>★★★★☆</p>
                </div>
                <p className={styles.commentData}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa magni tenetur possimus iure laudantium odio ducimus sed
                  aliquid, eveniet illo totam aliquam ab est rerum
                  necessitatibus voluptas accusamus deserunt architecto.
                </p>
              </div>
            </div>
            <div className={styles.yourComment}>
              <h3> Deja tu comentario </h3>
              <div>
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={24}
                      onClick={() => handleClick(index + 1)}
                      onMouseOver={() => handleMouseOver(index + 1)}
                      onMouseLeave={handleMouseLeave}
                      color={
                        (hoverValue || currentValue) > index
                          ? colors.orange
                          : colors.grey
                      }
                      style={{
                        marginRight: 10,
                        cursor: "pointer",
                      }}
                    />
                  );
                })}
              </div>
              <textarea
                placeholder="Deja tu comentario..."
                className={styles.textarea}
              />
              <button>Submit</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Cancha inexistente</p>
      )}
      <MiniFooter />
    </div>
  );
}

export default Detail;
