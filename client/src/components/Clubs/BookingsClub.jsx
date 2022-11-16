import React from 'react';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings, getFields } from '../../redux/actions';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './bookingsClub.module.css';

export default function BookingsClub() {
  const cookie = new Cookies();
  const [user, setUser] = useState();
  const id = Number(cookie.get('id'));
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.fields).filter(
    (f) => f.OwnerId === id,
  );

  useEffect(() => {
    const idUser = cookie.get('id');
    const getUserData = async () => {
      const { data } = await axios.get('http://localhost:3001/users/' + idUser);
      setUser(data);
    };
    dispatch(getBookings());
    dispatch(getFields());
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
            <th>#</th>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Cliente</th>
            <th>Telefono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {fields.map((field) =>
            {
              const bookings = field.Bookings.filter((b) => b.paymentStatus === "APPROVED");

              if (bookings.length) {
                return bookings.map((booking, i) => (
                  <tr key={booking.id} style={i % 2 === 0 ? {backgroundColor: '#404040'} : {backgroundColor: '#1C1C1C'}}>
                    <td>{field.id}</td>
                    <td>{field.name}</td>
                    <td>{booking.date}</td>
                    <td>{booking.hour}</td>
                    <td>{booking.User.name}</td>
                    <td>{booking.User.phone}</td>
                    <td style={{border: 'none'}}>{booking.User.email}</td>
                  </tr>
                ));
               }
              // else {
              //   return <tr>
              //     <td colSpan={7}>No hay reservas en la cancha {field.name}</td>
              //   </tr>
              // }
            },
          )}
        </tbody>
      </table>
      {/* ) : (
        <h3 className={styles.notfound}>No hay canchas reservadas :C</h3>
      )} */}
    </div>
  );
}
