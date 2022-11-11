import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import rd from './rent.module.css';

function Rentcard({id, deleteHandler, date, hour}) {

    const [data, setData] = useState()

    useEffect( () => {
        async function myData () {
            const idField = await axios.get('/fields/' + id);
            setData(idField.data)
        }
        myData()
    }, [])

    if(data){
        return (
        <div className={rd.main}>
          <img src={data.image} className={rd.img}/>
          <div className={rd.info}>
            <div className={rd.title}>
                <h2>{data.name}</h2>
                <p className={rd.type}>Reserva</p>
            </div>
            <div className={rd.div_price}>
                <h3 className={rd.price}>Precio: ${data.price}</h3>
                <p className={rd.hour}>Hora: {hour}:00</p>
                <p className={rd.date}>Fecha: {date}</p>
            </div>
          </div>
          <input type='button' value='X' onClick={() => deleteHandler(data.id)}/>
        </div>
        )
    }
}

export default Rentcard
