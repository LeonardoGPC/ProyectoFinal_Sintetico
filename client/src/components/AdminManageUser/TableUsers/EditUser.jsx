import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, putUser } from "../../../redux/actions";
import styles from "./EditUser.module.css";

export default function EditUser() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  const filterUsers = users
    .filter((user) => user.type != "admin")
    .sort(function (a, b) {
      return a.id - b.id;
    });
  console.log(filterUsers);

  const planNone = async (id) => {
    await axios.put("/users/" + id, {
      id: id,
      planType: "none",
    });
    window.location.reload();
  };

  const planBasico = async (id) => {
    await axios.put("/users/" + id, {
      id: id,
      planType: "basico",
    });
    window.location.reload();
  };

  const planClub = async (id) => {
    await axios.put("/users/" + id, {
      id: id,
      planType: "club",
    });
    window.location.reload();
  };

  const planPremium = async (id) => {
    await axios.put("/users/" + id, {
      id: id,
      planType: "premium",
    });
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className={styles.tablecards}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>E-mail</th>
            <th>Telefono</th>
            <th>Plan</th>
            <th>Gestionar plan</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers.map((el) => {
            return (
              <tr key={el.id} className={styles.columns}>
                <th>{el.id}</th>
                <th>{el.name}</th>
                <td>{el.userName}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.planType}</td>
                <td style={{border: 'none'}}>
                  <ul className={styles.plan}>
                    <li>
                      <button onClick={() => planNone(el.id)} className={styles.button} style={{borderRadius: '30px 0 0 30px'}}>Ninguno</button>
                    </li>
                    <li>
                      <button onClick={() => planBasico(el.id)} className={styles.button}>Básico</button>
                    </li>
                    <li>
                      <button onClick={() => planClub(el.id)} className={styles.button}>Club</button>
                    </li>
                    <li>
                      <button onClick={() => planPremium(el.id)} className={styles.button} style={{borderRadius: '0 30px 30px 0'}}>
                        Premium
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
