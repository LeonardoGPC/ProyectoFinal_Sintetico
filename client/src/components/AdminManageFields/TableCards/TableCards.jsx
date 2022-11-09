import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFields } from "../../../redux/actions";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import styles from "./TableCards.module.css";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

export default function TableCards() {
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
            <th>Detalle</th>
            <th>Estado</th>
            <th>Borrar</th>
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
                <td>
                  <Link to={`/sintetico/detail/${el.id}`}>
                    <button className={styles.edit}>
                      <RiEdit2Line />
                    </button>
                  </Link>
                </td>
                <td>
                  {el.state}
                  <button className={styles.approve}>
                    <AiOutlineCheck />
                  </button>
                </td>
                <td>
                  <button className={styles.delete}>
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
