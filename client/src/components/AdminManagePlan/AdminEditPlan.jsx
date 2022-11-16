import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminEditPlan.module.css";
import EditPlan from "./TablePlan/EditPlan";

export default function AdminEditPlan() {
  return (
    <div className={styles.admineditplan}>
      {/* <Navbar /> */}
      <div className={styles.title}>
        {/* <Link to="/gestionarprecios">
          <button className={styles.button}>Volver</button>
        </Link> */}
        <h1>Editar Planes</h1>
      </div>
      <EditPlan />
      {/* <MiniFooter /> */}
    </div>
  );
}
