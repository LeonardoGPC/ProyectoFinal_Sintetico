import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions";
import styles from "./EditUser.module.css";

export default function EditUser() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);
  const filterUsers = users.filter((user) => user.type != "admin");
  console.log(filterUsers);

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
                <td>
                  <select>
                    <option value="none">Ninguno</option>
                    <option value="basico">Básico</option>
                    <option value="club">Club</option>
                    <option value="premium">Premium</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
