import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions";
import styles from "./StatsPlan.module.css";
import {
  CartesianGrid,
  Legend,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function StatsPlan() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  console.log("hola soy un console");
  const usersNone = users.filter((user) => user.planType === "none").length;
  const usersBasico = users.filter((user) => user.planType === "basico").length;
  const usersClub = users.filter((user) => user.planType === "club").length;
  const usersPremium = users.filter(
    (user) => user.planType === "premium"
  ).length;
  const usersTotal = users.length;
  console.log("Total de usuarios: " + usersTotal);

  const data = [
    { name: "Ningun plan", none: usersNone },
    { name: "Básico", basico: usersBasico },
    { name: "Club", club: usersClub },
    { name: "Premium", premium: usersPremium },
    { name: "Total usuarios", total: usersTotal },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className={styles.statsplan}>
      <div className={styles.container}>
        <div className={styles.none}>
          <span>
            <p>Gratis</p>
            <p>{usersNone}</p>
          </span>
        </div>
        <div className={styles.basico}>
          <span>
            <p>Básico</p>
            <p>{usersBasico}</p>
          </span>
        </div>
        <div className={styles.club}>
          <span>
            <p>Club</p>
            <p>{usersClub}</p>
          </span>
        </div>
        <div className={styles.premium}>
          <span>
            <p>Premium</p>
            <p>{usersPremium}</p>
          </span>
        </div>
      </div>

      <div className={styles.grafico}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <Bar
            type="monotone"
            dataKey="none"
            fill="#105B10"
            strokeWidth={3}
            barSize={30}
          />
          <Bar
            type="monotone"
            dataKey="basico"
            fill="#105B10"
            strokeWidth={3}
            barSize={30}
          />
          <Bar
            type="monotone"
            dataKey="club"
            fill="#105B10"
            strokeWidth={3}
            barSize={30}
          />
          <Bar
            type="monotone"
            dataKey="premium"
            fill="#105B10"
            strokeWidth={3}
            barSize={30}
          />
          <Bar
            type="monotone"
            dataKey="total"
            fill="#105B10"
            strokeWidth={3}
            barSize={30}
          />
        </BarChart>
      </div>
    </div>
  );
}
