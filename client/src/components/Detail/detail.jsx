import styles from "./detail.module.css";

function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            src="https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?cs=srgb&dl=pexels-jonathan-petersson-399187.jpg&fm=jpg&_gl=1*1x0yt2v*_ga*MTM5MjQyNDMyMi4xNjU4MTYxNDQw*_ga_8JE65Q40S6*MTY2NjcyODI3OS4yMi4xLjE2NjY3MjgyODcuMC4wLjA."
            alt="cancha"
            style={{ height: 300 }}
          />
        </div>
        <div className={styles.detailInfo}>
          <h3 className={styles.name}>Nombre de la cancha</h3>
          <div className={styles.info}>
            <ul>
              <li>★★★★☆</li>
              <li>Tamaño</li>
              <li>Superficie</li>
              <li>Localidad</li>
            </ul>
            <span>
              <p className={styles.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                harum omnis alias doloremque perspiciatis sint tenetur, nostrum
                cupiditate molestias. Porro omnis veniam accusamus placeat
                corrupti reiciendis dolores exercitationem est repudiandae!
              </p>
              <p className={styles.price}>Precio</p>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.review}>
        <h4>Reseñas</h4>
        <div className={styles.comment}>
          <figure className={styles.userData}>
            <img
              src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="foto de perfil"
              className={styles.profile}
            />
          </figure>
          <div className={styles.userReview}>
            <ul className={styles.userList}>
              <li>★★★★☆</li>
              <li>Nombre</li>
            </ul>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae iure minus dolor nesciunt nemo vero, perspiciatis
              libero, placeat quisquam perferendis quia debitis fugit sapiente!
              In accusantium repellendus iste quisquam voluptatem!
            </p>
          </div>
        </div>
        <div className={styles.comment}>
          <figure className={styles.userData}>
            <img
              src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="foto de perfil"
              className={styles.profile}
            />
          </figure>
          <div className={styles.userReview}>
            <ul className={styles.userList}>
              <li>★★★★☆</li>
              <li>Nombre</li>
            </ul>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae iure minus dolor nesciunt nemo vero, perspiciatis
              libero, placeat quisquam perferendis quia debitis fugit sapiente!
              In accusantium repellendus iste quisquam voluptatem!
            </p>
          </div>
        </div>
        <div className={styles.comment}>
          <figure className={styles.userData}>
            <img
              src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="foto de perfil"
              className={styles.profile}
            />
          </figure>
          <div className={styles.userReview}>
            <ul className={styles.userList}>
              <li>★★★★☆</li>
              <li>Nombre</li>
            </ul>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae iure minus dolor nesciunt nemo vero, perspiciatis
              libero, placeat quisquam perferendis quia debitis fugit sapiente!
              In accusantium repellendus iste quisquam voluptatem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
