import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminRestrict.module.css";

export default function AdminRestrict() {
  return (
    <div className={styles.adminrestrict}>
      <Navbar />
      <div className={styles.title}>
        <Link to="/gestionarusuarios">
          <button className={styles.button}>Volver</button>
        </Link>
        <h1>Restringir Usuario</h1>
      </div>
      <MiniFooter />
    </div>
  );
}
