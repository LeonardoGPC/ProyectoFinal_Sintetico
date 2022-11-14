import React from "react";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from 'react-redux';
import { getBookings, getFields } from "../../redux/actions";
import { useEffect, useState } from 'react';
import axios from "axios";

import styles from './bookingsClub.module.css'



export default function BookingsClub() {
   const cookie = new Cookies();
   const [user, setUser] = useState();
  const id = Number(cookie.get("id"));
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields).filter((f) => f.OwnerId === id);

  useEffect(() => { 
    const idUser = cookie.get('id');
    const getUserData = async () => {
    const { data } = await axios.get('http://localhost:3001/users/' + idUser);
      setUser(data);
    }
    dispatch(
      getBookings());
      dispatch(
        getFields()
      );
      getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.tableBookings}>
        <div className={styles.tittle}> Reservas </div>
      {/* {bookings.length > 0 ? ( */}
        
        <table>
          <thead>
            <tr>
              
              <th>Cancha</th>
              <th>Fecha</th>
              <th>Horario</th>
              <th>Cliente</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
           {fields.map((field) => ( 
             field.Bookings.map((booking)=> (
              <tr key={booking.id}>
                <td>{field.name}</td>
                <td>{booking.date}</td>
                <td>{booking.hour}</td> 
                <td>{booking.User.name}</td>
                <td>{booking.User.phone}</td>
              </tr>
             ))
           ))}
           </tbody>
        </table>
      {/* ) : (
        <h3 className={styles.notfound}>No hay canchas reservadas :C</h3>
      )} */}
    </div>

  )
}