import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plan } from '../../../redux/actions';
import styles from './EditPlan.module.css';

export default function EditPlan() {
  const planes = useSelector((state) => state.plan);
  console.log(planes);
  const dispatch = useDispatch();


  const [basico, setBasico] = useState(planes.basico);
  const [club, setClub] = useState(planes.club);
  const [premium, setPremium] = useState(planes.premium);

  const handleSubmit = (editPlan, key) => {
    dispatch(plan(editPlan, key));
  };

  return (
    <div className={styles.editplan}>
      <div className={styles.container}>
        {/* ------------------------PLANES----------------------------------- */}
        <div className={styles.card}>
          <div className={styles.plan}>
            <img src={basico.img} alt="basico" />
            <div className={styles.txt}>
              <h2>{basico.name}</h2>
              <p>${basico.price}</p>
              <p>AHORRO {basico.desc}%</p>
              <p>
                ${basico.price - (basico.price / 100) * basico.desc}
                /Mes.
              </p>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles.edit}>
            <h2>{basico.name}</h2>
            <div>
              <p>DESCUENTO</p>
              <input
                type="text"
                name="desc"
                value={basico.desc}
                onChange={(e) => setBasico({ ...basico, desc: e.target.value })}
                className={styles.text}
              />
              <input
                type="button"
                onClick={() => handleSubmit(basico, 'basico')}
                value="Guardar"
                className={styles.button}
              />
            </div>
            <div>
              <p>PRECIO</p>
              <input
                type="text"
                className={styles.text}
                value={basico.price}
                onChange={(e) =>
                  setBasico({ ...basico, price: e.target.value })
                }
              />
              <input
                type="button"
                value="Guardar"
                onClick={() => handleSubmit(basico, 'basico')}
                className={styles.button}
              />
            </div>
          </div>
        </div>

        {/* ------------------------PLANES----------------------------------- */}
        <div className={styles.card}>
          <div className={styles.plan}>
            <img src={club.img} />
            <div className={styles.txt}>
              <h2>{club.name}</h2>
              <p>${club.price}</p>
              <p>AHORRO {club.desc}%</p>
              <p>
                ${club.price - (club.price / 100) * club.desc}
                /Mes.
              </p>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles.edit}>
            <h2>{club.name}</h2>
            <div>
              <p>DESCUENTO</p>
              <input
                type="text"
                className={styles.text}
                value={club.desc}
                onChange={(e) => setClub({ ...club, desc: e.target.value })}
              />
              <input
                type="button"
                value="Guardar"
                onClick={() => handleSubmit(club, 'club')}
                className={styles.button}
              />
            </div>
            <div>
              <p>PRECIO</p>
              <input
                type="text"
                className={styles.text}
                value={club.price}
                onChange={(e) => setClub({ ...club, price: e.target.value })}
              />
              <input
                type="button"
                value="Guardar"
                onClick={() => handleSubmit(club, 'club')}
                className={styles.button}
              />
            </div>
          </div>
        </div>

        {/* ------------------------PLANES----------------------------------- */}
        <div className={styles.card}>
          <div className={styles.plan}>
            <img src={premium.img} />
            <div className={styles.txt}>
              <h2>{premium.name}</h2>
              <p>${premium.price}</p>
              <p>AHORRO {premium.desc}%</p>
              <p>
                ${premium.price - (premium.price / 100) * premium.desc}
                /Mes.
              </p>
            </div>
          </div>
          {/* ------------ */}
          <div className={styles.edit}>
            <h2>{premium.name}</h2>
            <div>
              <p>DESCUENTO</p>
              <input
                type="text"
                name="desc"
                value={premium.desc}
                onChange={(e) =>
                  setPremium({ ...premium, desc: e.target.value })
                }
                className={styles.text}
              />
              <input
                type="button"
                value="Guardar"
                onClick={() => handleSubmit(premium, 'premium')}
                className={styles.button}
              />
            </div>
            <div>
              <p>PRECIO</p>
              <input
                type="text"
                className={styles.text}
                value={premium.price}
                onChange={(e) =>
                  setPremium({ ...premium, price: e.target.value })
                }
              />
              <input
                type="button"
                value="Guardar"
                onClick={() => handleSubmit(premium, 'premium')}
                className={styles.button}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
