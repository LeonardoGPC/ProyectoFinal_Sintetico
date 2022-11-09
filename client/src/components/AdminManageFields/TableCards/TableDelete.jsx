import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFields } from "../../../redux/actions";
import { RiEdit2Line } from "react-icons/ri";
import styles from "./TableDelete.module.css";

export default function TableDelete() {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  console.log(fields);

  useEffect(() => {
    dispatch(getFields());
  }, []);

  return (
    <div className={styles.tablecards}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Cancha</th>
            <th>Localidad</th>
            <th>Precio</th>
            <th>Jugadores</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((el) => {
            return (
              <tr key={el.id} className={styles.columns}>
                <th>{el.id}</th>
                <td>{el.name}</td>
                <td>{el.City.name}</td>
                <td>${el.price}</td>
                <td>{el.Size.name}</td>
                <td>
                  <Link to={`/sintetico/detail/${el.id}`}>
                    <button className={styles.detail}>
                      <RiEdit2Line />
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
