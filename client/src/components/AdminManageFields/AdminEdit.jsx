import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminEdit.module.css";
import TableCards from "./TableCards/TableCards";

export default function AdminEdit() {
  return (
    <div className={styles.adminedit}>
      {/* <Navbar /> */}
      <div className={styles.title}>
        {/* <Link to="/gestionarpublicaciones">
          <button className={styles.button}>Volver</button>
        </Link> */}
        <h1>Editar Publicaciones</h1>
      </div>
      <TableCards />
      <div className={styles.container}></div>
      {/* <MiniFooter /> */}
    </div>
  );
}
