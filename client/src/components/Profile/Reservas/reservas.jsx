import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import r from './reservas.module.css'
import { useState, useEffect } from 'react';
import Cookies from "universal-cookie";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Reservas() {

    let bookings = useSelector((state) => state.bookings);
    const cookie = new Cookies();
    const idUser = cookie.get("id");
    const arr = bookings.filter(b=> b.paymentStatus === 'APPROVED');
    const [userData, setUserData] = useState({
        id: "",
        name: "",
        lastName: "",
        userName: "",
        email: "",
        phone: "",
        image: "",
        type: "",
      });
    const getById = arr.filter((e) => e.UserId === userData.id);

    useEffect(() => {
      const getUserData = async () => {
        let data = await axios.get("/users/" + idUser);
        setUserData({
          id: data.data.id,
          name: data.data.name,
          lastName: data.data.lastName,
          userName: data.data.userName,
          email: data.data.email,
          phone: data.data.phone,
          image: data.data.image,
          type: data.data.type,
        });
      };
      getUserData();
    }, []);

  return (
    <div className={r.contentInfo}>
      {getById.length > 0 ? getById.map((e) => {
        return (                     
          <div className={r.divInfo} key={e.id}>
            <div className={r.zone}>
              <h3 className={r.zoneBooking}>Reservas</h3>
            <h3 className={r.info}>Fecha: {e.date}</h3>
            <h3 className={r.info}>Horario: {e.hour}</h3>
            <h3 className={r.info}>
              Cancha: {e.Fields[0].name}
            </h3>
          </div>
          </div>
        );
      }) : <div className={r.noReserv}>
        <h1>No has reservado ninguna cancha.</h1>
        <Link className={r.cta} to='/sintetico'>Reservar</Link>
        </div>}
    </div>
  )
}

export default Reservas
