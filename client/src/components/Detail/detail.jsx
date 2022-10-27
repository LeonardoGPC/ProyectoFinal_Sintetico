import Navbar from "../NavBar/Navbar";
import styles from "./detail.module.css";

function Detail() {
  return (
    <div>
      <Navbar />
      <div className={styles.detail}>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
          <figure className={styles.image}>
            {/* <button>←</button> */}
            <img
              src="https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?cs=srgb&dl=pexels-jonathan-petersson-399187.jpg&fm=jpg&_gl=1*1x0yt2v*_ga*MTM5MjQyNDMyMi4xNjU4MTYxNDQw*_ga_8JE65Q40S6*MTY2NjcyODI3OS4yMi4xLjE2NjY3MjgyODcuMC4wLjA."
              alt="cancha"
            />
            {/* <button>→</button> */}
          </figure>
          <div className={styles.info}>
            <div className={styles.title}>
              <h3 className={styles.name}>Nombre de la cancha</h3>
              <button className={styles.button}>X</button>
            </div>
            <div className={styles.content}>
              <ul>
                <li>★★★★☆</li>
                <li>Tamaño</li>
                <li>Superficie</li>
                <li>Localidad</li>
              </ul>
              <div className={styles.description}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa voluptate a aut veritatis similique, voluptatum, vero
                  quis quae ut nobis at ducimus ipsa ea id sint repellat
                  voluptates reprehenderit perspiciatis.
                </p>
                <span className={styles.price}>
                  <p>Precio</p>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              magni tenetur possimus iure laudantium odio ducimus sed aliquid,
              eveniet illo totam aliquam ab est rerum necessitatibus voluptas
              accusamus deserunt architecto.
            </p>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Detail;
