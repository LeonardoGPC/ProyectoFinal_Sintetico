import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import Benefits from "./TableUsers/Benefits";
import styles from "./UserBenefits.module.css";

export default function UserBenefits() {
  return (
    <div className={styles.userbenefits}>
      {/* <Navbar /> */}
      <div className={styles.title}>
        {/* <Link to="/gestionarusuarios">
          <button className={styles.button}>Volver</button>
        </Link> */}
        <h1>Beneficios de Usuario</h1>
      </div>
      <Benefits />
      {/* <MiniFooter /> */}
    </div>
  );
}
