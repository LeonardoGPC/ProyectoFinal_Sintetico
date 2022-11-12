import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import Plan from "./TablePlan/Plan";
import styles from "./AdminManagePlan.module.css";
import { Link } from "react-router-dom";

export default function AdminManagePlan() {
  return (
    <div className={styles.adminmanageplan}>
      <Navbar />
      <div className={styles.title}>
        <Link to="/gestionarusuarios">
          <button className={styles.button}>Volver</button>
        </Link>
        <h1>Editar Publicaciones</h1>
      </div>
      <Plan />
      <MiniFooter />
    </div>
  );
}
