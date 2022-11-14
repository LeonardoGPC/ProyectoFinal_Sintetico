import { useSelector } from "react-redux";
import styles from "./EditPlan.module.css";

export default function EditPlan() {
  const planes = useSelector((state) => state.plan);
  console.log(planes);
  return (
    <div className={styles.editplan}>
      <div className={styles.container}>
        {/* ------------------------PLANES----------------------------------- */}
        <div className={styles.card}>
          <div className={styles.plan}>
            <img src={planes.basic.img} />
            <div>
              <h2>{planes.basic.name}</h2>
              <p>${planes.basic.price}</p>
              <p>AHORRO {planes.basic.desc}%</p>
              <p>
                $
                {planes.basic.price -
                  (planes.basic.price / 100) * planes.basic.desc}
                /Mes.
              </p>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles.edit}>
            <h2>{planes.basic.name}</h2>
            <div>
              <p>DESCUENTO</p>
              <input type="text" className={styles.text} />
              <input type="submit" className={styles.button} />
            </div>
            <div>
              <p>PRECIO</p>
              <input type="text" className={styles.text} />
              <input type="submit" className={styles.button} />
            </div>
          </div>
        </div>

        {/* ------------------------PLANES----------------------------------- */}
        <div className={styles.card}>
          <div className={styles.plan}>
            <img src={planes.club.img} />
            <div>
              <h2>{planes.club.name}</h2>
              <p>${planes.club.price}</p>
              <p>AHORRO {planes.club.desc}%</p>
              <p>
                $
                {planes.club.price -
                  (planes.club.price / 100) * planes.club.desc}
                /Mes.
              </p>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles.edit}>
            <h2>{planes.club.name}</h2>
            <div>
              <p>DESCUENTO</p>
              <input type="text" className={styles.text} />
              <input type="submit" className={styles.button} />
            </div>
            <div>
              <p>PRECIO</p>
              <input type="text" className={styles.text} />
              <input type="submit" className={styles.button} />
            </div>
          </div>
        </div>

        {/* ------------------------PLANES----------------------------------- */}
        <div className={styles.card}>
          <div className={styles.plan}>
            <img src={planes.premium.img} />
            <div>
              <h2>{planes.premium.name}</h2>
              <p>${planes.premium.price}</p>
              <p>AHORRO {planes.premium.desc}%</p>
              <p>
                $
                {planes.premium.price -
                  (planes.premium.price / 100) * planes.premium.desc}
                /Mes.
              </p>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles.edit}>
            <h2>{planes.premium.name}</h2>
            <div>
              <p>DESCUENTO</p>
              <input type="text" className={styles.text} />
              <input type="submit" className={styles.button} />
            </div>
            <div>
              <p>PRECIO</p>
              <input type="text" className={styles.text} />
              <input type="submit" className={styles.button} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
