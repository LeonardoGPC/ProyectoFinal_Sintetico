import React from 'react'
import p from './pagos.module.css'
import Navbar from '../NavBar/Navbar.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import Rentcard from './Rent/rent';
import MiniFooter from '../MiniFooter/MiniFooter.jsx';
import axios from 'axios';
import { URL_APP } from '../../utils/utils';

function Pagos() {

    let plan = localStorage.getItem('plan')
    let rent = localStorage.getItem('rent')
    const planes = useSelector((state) => state.plan)
    const [carga, setCarga] = useState(false)
    const cookie = new Cookies()
    const usuario = cookie.get('usuario')
    const idUser = cookie.get('id')
    const [precio, setPrecio] = useState()
    const [btn, setBtn] = useState(false) 

    const pay = async () => {
        if(rent){
            await axios.post('/payments', {
                UserId: idUser,
                price: precio,
                itemName: "Reserva",
                bookings:
                [
                    {
                    date: JSON.parse(rent)[0].date,
                    hour: JSON.parse(rent)[0].hour,
                    FieldId: JSON.parse(rent)[0].id
                    }
                ]
            })
            .then(response => response.data)
            .then(res => {
                window.location.replace(res)
            })
            .catch(error => console.log(error))
        } else {
            await axios.post('/payments', {
                UserId: idUser,
                price: precio,
                itemName: `Plan ${plan}`,
            })
            .then(response => response.data)
            .then(res => {
                window.location.replace(res)
            })
            .catch(error => console.log(error))
        }
    }

    const changeCarga = () => {
        setCarga(false)
    }

    const changePlan = (e) => {
        localStorage.setItem('plan', e.target.value)
        plan = localStorage.getItem('plan')
        setCarga(true)
        setTimeout(changeCarga, 1000)
    }

    const deletePlan = () => {
        localStorage.removeItem('plan')
        plan = localStorage.getItem('plan')
        setCarga(true)
        setTimeout(changeCarga, 1000)
    }

    const deleteHandler = (id) => {
        if(JSON.parse(rent).length === 1){
            localStorage.removeItem('rent')
        } else {
            rent = JSON.parse(rent).filter(e => e.id !== id)
            localStorage.setItem('rent', JSON.stringify(rent))
            rent = localStorage.getItem('rent')
        }
        setCarga(true)
        setTimeout(changeCarga, 1000)
    }

    useEffect(() => {
        if(precio === 0){
            window.location.replace('/')
            if(rent) localStorage.removeItem('rent')
            if(plan) localStorage.removeItem('plan')
        }
    }, [precio])

    useEffect(() => {
        let totalPrice = 0;
        if(rent){
            JSON.parse(rent).map(r => totalPrice += r.price)
        }
        if (plan) {
            totalPrice += planes[plan].desc ? Number(planes[plan].price) - ((Number(planes[plan].price) / 100) * Number(planes[plan].desc)) : Number(planes[plan].price)
        }
        setPrecio(totalPrice)
    },[rent, plan])

    if(typeof usuario === 'undefined'){
        window.location.replace(`${URL_APP}/login`);
    } else if(plan || rent) {
        return (
          <div className={p.main}>
              <Navbar/>
              <div className={p.container}>
              {carga ? <div className={p.info2}><div className={p.carga}></div></div> : <div className={p.box}>
                  <div className={p.cards}>
                  {plan && <div className={p.info}>
                      <img src={planes[plan].img} className={p.img}/>
                      <div className={p.contenido}>
                      <div className={p.title}>
                        <h2>{planes[plan].name}</h2>
                        <p className={p.type}>Suscripción</p>
                      </div>
                      <div className={p.price_container}>
                        <div className={p.price_desc}>
                            <h3>Precio: ${planes[plan].price}/mes.</h3>
                            {planes[plan].desc > 0 && <p>Descuento: {planes[plan].desc}%</p>}
                        </div>
                      <select defaultValue='default' onChange={(e) => changePlan(e)}>
                        <option value='default' disabled>Cambiar plan</option>
                        <option value='basico'>Básico</option>
                        <option value='club'>Clubes</option>
                        <option value='premium'>Premium</option>
                      </select>
                      </div>
                      </div>
                      <input type='button' value='X' onClick={() => deletePlan()}/>
                  </div>}
                  {rent && (JSON.parse(rent).length === 1 ? <Rentcard id={JSON.parse(rent)[0].id} deleteHandler={deleteHandler} hour={JSON.parse(rent)[0].hour} date={JSON.parse(rent)[0].date}/> : JSON.parse(rent).map(e => <Rentcard id={e.id} deleteHandler={deleteHandler} hour={e.hour} date={e.date}/>))}
                  </div>
                  <div className={p.price}>
                    <h1>Productos:</h1>
                        {plan && <div className={p.plan_price}>
                            <h3>{planes[plan].name}:</h3>
                            <div className={p.plan_datos}>
                                <p>Precio: ${planes[plan].price}/mes.</p>
                                {planes[plan].desc && <p>Descuento: {planes[plan].desc}%</p>}
                                <p>Total: ${planes[plan].price - ((planes[plan].price / 100) * planes[plan].desc)}/Mes.</p>
                            </div>
                        </div>}
                        {rent && JSON.parse(rent).map(e => <div className={p.plan_price}>
                            <h3>{e.name}:</h3>
                            <p>${e.price}</p>
                            </div>)}
                      <p className={p.price_total}>Total: ${precio}</p>
                      <input type='button' onClick={() => pay()} value='Continuar'/>
                  </div>
                  </div>
                    }
            </div>
            <MiniFooter/>
          </div>
        )
    } else {
        return (
            <div className={p.main}>
                <Navbar/>
                <div className={p.container2}>
                    <div className={p.box2}>
                        <h1>Lo siento, el carrito<br/>está vacío. :(</h1>
                        <input value='Regresar' type='button' onClick={() => window.history.back()} className={p.button}/>
                    </div>
                </div>
                <MiniFooter/>
            </div>
          )
    }
}

export default Pagos
