import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import TableDelete from "./TableCards/TableDelete";
import styles from "./AdminDeleted.module.css";
import { Link } from "react-router-dom";

export default function AdminDeleted() {
  return (
    <div className={styles.admindelete}>
      {/* <Navbar /> */}
      <div className={styles.title}>
        {/* <Link to="/gestionarpublicaciones">
          <button className={styles.button}>Volver</button>
        </Link> */}
        <h1>Publicaciones eliminadas</h1>
      </div>
      <TableDelete />
      {/* <MiniFooter /> */}
    </div>
  );
}
