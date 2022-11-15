import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminStats.module.css";

export default function AdminStats() {
  return (
    <div className={styles.adminstats}>
      <Navbar />
      <div className={styles.stats}>
        <Link to="/gestionarpublicaciones">
          <button className={styles.button}>Volver</button>
        </Link>
        <h1 className={styles.title}>Página en construcción...</h1>
        <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <MiniFooter />
      </div>
    </div>
  );
}
