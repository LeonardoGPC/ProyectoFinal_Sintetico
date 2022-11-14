import { useSelector } from "react-redux";
import styles from "./Plan.module.css";

export default function Plan() {
  const planes = useSelector((state) => state.plan);
  console.log(planes);
  return (
    <div className={styles.plan}>
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
          <tr className={styles.columns}>
            <th>{planes.basico.name}</th>
            <th>{planes.basico.price}</th>
            <td>{planes.basico.desc}%</td>
          </tr>
          <tr className={styles.columns}>
            <th>{planes.club.name}</th>
            <th>{planes.club.price}</th>
            <td>{planes.club.desc}%</td>
          </tr>
          <tr className={styles.columns}>
            <th>{planes.premium.name}</th>
            <th>{planes.premium.price}</th>
            <td>{planes.premium.desc}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
