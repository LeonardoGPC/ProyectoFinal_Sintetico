import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFields } from "../../../redux/actions";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import styles from "./TableCards.module.css";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";

export default function TableCards() {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields);
  console.log(fields);

  const handlerState = async (id) => {
    console.log(id);
    await axios.put("/fields/" + id, {
      id: id,
      state: "APPROVED",
    });
    window.location.reload();
  };

  const handlerDelete = async (id) => {
    console.log(id);
    await axios.put("/fields/" + id, {
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
                  <Link to={`/sintetico/detail/${el.id}`} className={styles.edit}>
                      <RiEdit2Line style={{width: '25px', height: '25px'}}/>
                  </Link>
                </td>
                <td>{el.User.planType}</td>
                <td>
                  {el.state != "APPROVED" ? (
                    <div className={styles.dissap}>
                      {el.state}
                      <button
                        onClick={() => handlerState(el.id)}
                        className={styles.approve}
                      >
                        <AiOutlineCheck style={{width: '25px', height: '25px'}}/>
                      </button>
                    </div>
                  ) : (
                    el.state
                  )}
                </td>
                <td style={{border: 'none'}}>
                  <button
                    onClick={() => handlerDelete(el.id)}
                    className={styles.delete}
                  >
                    <RiDeleteBin6Line style={{width: '25px', height: '25px'}}/>
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
