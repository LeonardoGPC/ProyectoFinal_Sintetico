import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFields } from '../../redux/actions';
import { Link } from "react-router-dom";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import styles from './seePost.module.css';
import Cookie from "universal-cookie";
import axios from "axios";


export default function SeePost() {
  const cookie = new Cookie();
  const id = Number(cookie.get("id"));
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields).filter((f) => f.OwnerId === id);
 const fieldsAproved =  fields.filter((f) => f.state === "APPROVED");
 
 const handlerDelete = async (id) => {
  await axios.put("http://localhost:3001/fields/" + id, {
    id: id,
    state: "DISAPPROVED"
  })
  window.location.reload()
}

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
              <th>Borrar</th>
            </tr>
          </thead>
          {fieldsAproved.map((el, i) => (
            <tbody className={styles.tbody} style={i % 2 === 0 ? {backgroundColor: '#404040'} : {backgroundColor: '#1C1C1C'}}>
              <tr key={i}>
                <th>{el.id}</th>
                <td>{el.name}</td>
                <td>{el.City.name}</td>
                <td>${el.price}</td>
                <td>{el.Size.name}</td>
                <td>
                  <Link to={`/sintetico/detail/${el.id}`} className={styles.details} >
                    {/* <button className={styles.details}> */}
                      <RiEdit2Line style={{width: '25px', height: '25px'}}/>
                    {/* </button> */}
                  </Link>
                </td>
                <td style={{border: 'none'}}>
                  <button onClick={() => handlerDelete(el.id)} className={styles.delete}>
                    <RiDeleteBin6Line style={{width: '25px', height: '25px'}}/>
                  </button>
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
