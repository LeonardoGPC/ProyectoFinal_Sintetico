import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFields } from "../../../redux/actions";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./TableApproved.module.css";

export default function TableApproved() {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  // console.log(fields);

  const filterField = fields.filter((f) => f.state === "APPROVED");
  console.log(filterField);

  useEffect(() => {
    dispatch(getFields());
  }, []);
  return (
    <div className={styles.tablecards}>
      {filterField.length > 0 ? (
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
          {filterField.map((el, i) => (
            <tbody className={styles.tbody} style={i % 2 === 0 ? {backgroundColor: '#404040'} : {backgroundColor: '#1C1C1C'}}>
              <tr key={el.id}>
                <th>{el.id}</th>
                <td>{el.name}</td>
                <td>{el.City.name}</td>
                <td>${el.price}</td>
                <td>{el.Size.name}</td>
                <td style={{border: 'none'}}>
                  <Link to={`/sintetico/detail/${el.id}`}>
                    <button className={styles.detail}>
                      <RiEdit2Line style={{width: '25px', height: '25px'}}/>
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <h3 className={styles.notfound}>No hay canchas aprobadas</h3>
      )}
    </div>
  );
}
