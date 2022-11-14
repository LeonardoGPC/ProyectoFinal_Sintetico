import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFields } from '../../redux/actions';
import { Link } from "react-router-dom";
import { RiEdit2Line } from "react-icons/ri";
import styles from './seePost.module.css';
import Cookie from "universal-cookie";


export default function SeePost() {
  const cookie = new Cookie();
  const id = Number(cookie.get("id"));
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields).filter((f) => f.OwnerId === id);
 const fieldsAproved =  fields.filter((f) => f.state === "APPROVED");
 

  useEffect(() => {
    dispatch(getFields());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    
    <div className={styles.tablefields}>
      <div className={styles.tittle}> Mis publicaciones </div>
      {fieldsAproved.length > 0 ? (
        
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
          {fieldsAproved.map((el) => (
            <tbody className={styles.tbody}>
              <tr key={el.id}>
                <th>{el.id}</th>
                <td>{el.name}</td>
                <td>{el.City.name}</td>
                <td>${el.price}</td>
                <td>{el.Size.name}</td>
                <td>
                  <Link to={`/sintetico/detail/${el.id}`}>
                    <button className={styles.details}>
                      <RiEdit2Line />
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
