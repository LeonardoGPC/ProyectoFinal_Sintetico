import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions";
import styles from "./StatsPlan.module.css"

export default function StatsPlan() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.allUsers);

    const usersNone = users.filter(user => user.planType === "none").length
    const usersBasico = users.filter(user => user.planType === "basico").length
    const usersClub = users.filter(user => user.planType === "club").length
    const usersPremium = users.filter(user => user.planType === "premium").length
    const usersTotal = users.length 
    console.log("Total de usuarios: " + usersTotal);

    useEffect(() => {
        dispatch(getUsers());
      }, []);
  return (
    <div className={styles.statsplan}>
        <div className={styles.none}>Gratis: {usersNone}</div>
        <div className={styles.basico}>Básico: {usersBasico}</div>
        <div className={styles.club}>Club: {usersClub}</div>
        <div className={styles.premium}>Premium: {usersPremium}</div>
    </div>
  )
}
