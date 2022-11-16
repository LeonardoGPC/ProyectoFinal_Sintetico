import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminEditPremium.module.css";
import TableEditPremium from "./TableCards/TableEditPremium";

export default function AdminEditPremium() {
  return (
    <div className={styles.adminpremium}>
      {/* <Navbar /> */}
      <div className={styles.title}>
        {/* <Link to="/gestionarpublicaciones">
          <button className={styles.button}>Volver</button>
        </Link> */}
        <h1>Editar publicaciones premium</h1>
      </div>
      <TableEditPremium />
      {/* <MiniFooter /> */}
    </div>
  );
}
