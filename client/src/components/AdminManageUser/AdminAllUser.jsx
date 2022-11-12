import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminAllUser.module.css";
import EditUser from "./TableUsers/EditUser";

export default function AdminAllUser() {
  return (
    <div className={styles.adminedit}>
      <Navbar />
      <div className={styles.title}>
        <Link to="/gestionarpublicaciones">
          <button className={styles.button}>Volver</button>
        </Link>
        <h1>Editar Publicaciones</h1>
      </div>
      <EditUser />
      <MiniFooter />
    </div>
  );
}
