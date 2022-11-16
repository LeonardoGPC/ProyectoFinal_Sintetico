import { Link } from "react-router-dom";
import MiniFooter from "../MiniFooter/MiniFooter";
import Navbar from "../NavBar/Navbar";
import styles from "./AdminPlanStats.module.css";
import StatsPlan from "./TablePlan/StatsPlan";

export default function AdminPlanStats() {
  return (
    <div className={styles.adminstats}>
      {/* <Navbar /> */}
      <div className={styles.title}>
        {/* <Link to="/gestionarprecios">
          <button className={styles.button}>Volver</button>
        </Link> */}
        <h1>Estadistica consumo de planes</h1>
      </div>
      <StatsPlan />
      {/* <MiniFooter /> */}
    </div>
  );
}
