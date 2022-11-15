import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFields } from "../../../redux/actions";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import styles from "./TableEditPremium.module.css";
import axios from "axios";

export default function TableEditPremium() {
  const dispatch = useDispatch();
  const fieldState = useSelector((state) => state.fields);
  const fields = fieldState.filter((f) => f.User.planType === "premium");
  console.log(fields);

  const handlerState = async (id) => {
    console.log(id);
    await axios.put("http://localhost:3001/fields/" + id, {
      id: id,
      state: "APPROVED",
    });
    window.location.reload();
  };

  const handlerDelete = async (id) => {
    console.log(id);
    await axios.put("http://localhost:3001/fields/" + id, {
      id: id,
      state: "DISAPPROVED",
    });
    window.location.reload();
  };

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
            <th>Plan</th>
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
                <td>{el.User.planType}</td>
                <td>
                  {el.state != "APPROVED" ? (
                    <>
                      {el.state}
                      <button
                        onClick={() => handlerState(el.id)}
                        className={styles.approve}
                      >
                        <AiOutlineCheck />
                      </button>
                    </>
                  ) : (
                    el.state
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handlerDelete(el.id)}
                    className={styles.delete}
                  >
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
