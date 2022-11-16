import { useSelector } from "react-redux";
import styles from "./Plan.module.css";

export default function Plan() {
  const planes = useSelector((state) => state.plan);
  console.log(planes);
  return (
    <div className={styles.plan}>
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descuento</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.columns} style={{backgroundColor: '#404040'}}>
              <th>{planes.basico.name}</th>
              <th>${planes.basico.price}</th>
              <td style={{border: 'none'}}>{planes.basico.desc}%</td>
            </tr>
            <tr className={styles.columns} style={{backgroundColor: '#1C1C1C'}}>
              <th>{planes.club.name}</th>
              <th>${planes.club.price}</th>
              <td style={{border: 'none'}}>{planes.club.desc}%</td>
            </tr>
            <tr className={styles.columns} style={{backgroundColor: '#404040'}}>
              <th>{planes.premium.name}</th>
              <th>${planes.premium.price}</th>
              <td style={{border: 'none'}}>{planes.premium.desc}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
