import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions";
import styles from "./StatsPlan.module.css";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function StatsPlan() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);

  const usersNone = users.filter((user) => user.planType === "none").length;
  const usersBasico = users.filter((user) => user.planType === "basico").length;
  const usersClub = users.filter((user) => user.planType === "club").length;
  const usersPremium = users.filter(
    (user) => user.planType === "premium"
  ).length;
  const usersTotal = users.length;
  console.log("Total de usuarios: " + usersTotal);

  const data = [
    { name: "2017", react: 32, angular: 37, vue: 60 },
    { name: "2018", react: 42, angular: 42, vue: 54 },
    { name: "2019", react: 51, angular: 41, vue: 54 },
    { name: "2020", react: 60, angular: 37, vue: 28 },
    { name: "2021", react: 51, angular: 31, vue: 27 },
    { name: "2022", react: 95, angular: 44, vue: 49 },
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className={styles.statsplan}>
      <div className={styles.none}>Gratis: {usersNone}</div>
      <div className={styles.basico}>Básico: {usersBasico}</div>
      <div className={styles.club}>Club: {usersClub}</div>
      <div className={styles.premium}>Premium: {usersPremium}</div>
      <div className={styles.grafico}>
        <LineChart width={600} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="react"
            stroke="#2196F3"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="angular"
            stroke="#F44236"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="vue"
            stroke="#FFCA29"
            strokeWidth={3}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
}
