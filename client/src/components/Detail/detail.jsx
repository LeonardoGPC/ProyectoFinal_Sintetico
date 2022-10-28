import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../NavBar/Navbar";
import styles from "./detail.module.css";
import { useEffect } from "react";
import { getFieldDetail } from "../../redux/actions";
import MiniFooter from "../MiniFooter/MiniFooter";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailField = useSelector((state) => state.detail);
  console.log(detailField);

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
                <img
                  src={detailField.image}
                  alt="cancha"
                />
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
                    <li>Cancha para {detailField.Size.name} jugadores</li>
                    <li>Tipo de suelo: {detailField.Surface.name}</li>
                    <li>Ubicación: {detailField.City.name}</li>
                  </ul>
                  <div className={styles.description}>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Culpa voluptate a aut veritatis similique, voluptatum,
                      vero quis quae ut nobis at ducimus ipsa ea id sint
                      repellat voluptates reprehenderit perspiciatis.
                    </p>
                    <span className={styles.price}>
                      <p>US${detailField.price}</p>
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
          </div>
        </div>
      ) : (
        <p>Cancha inexistente</p>
      )}
      <MiniFooter/>
    </div>
  );
}

export default Detail;
