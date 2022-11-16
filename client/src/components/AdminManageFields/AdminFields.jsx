import { Link } from "react-router-dom";
import Cards from "../Cards/cards";
import Filters from "../Home/Filters/filters";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminFields.module.css";
import TableApproved from "./TableCards/TableApproved";

export default function AdminFields() {
  return (
    <div className={styles.adminfields}>
      {/* <Navbar /> */}
      <div className={styles.title}>
        {/* <Link to="/gestionarpublicaciones">
          <button className={styles.button}>Volver</button>
        </Link> */}
        <h1>Publicaciones aprobadas</h1>
      </div>
      <div className={styles.container}>
        {/* <Filters /> */}
        <TableApproved />
      </div>
      {/* <MiniFooter /> */}
    </div>
  );
}
