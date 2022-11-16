import React from 'react';
import axios from 'axios';
import { RiEdit2Line } from 'react-icons/ri';
import styles from './managePlan.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

export default function ManagePlan() {
  const planes = useSelector((state) => state.plan);
  const [user, setUser] = useState();
  const [plan, setPlan] = useState('');
  const detallePlan = planes[plan];
  const mostrarPagar = user?.planType !== plan && plan !== 'none';
  // const mostrarCancelarPlan = user?.planType !== plan && plan ==='none';

  useEffect(() => {
    const cookie = new Cookies();
    const idUser = cookie.get('id');
    const getUserData = async () => {
      const { data } = await axios.get('http://localhost:3001/users/' + idUser);
      setUser(data);
      setPlan(data.planType);
    };
    getUserData();
  }, []);

  const changePlan = (e) => {
    setPlan(e.target.value);
    if (e.target.value !== 'none' && e.target.value !== user?.planType) {
      localStorage.setItem('plan', e.target.value);
    } else {
      localStorage.removeItem('plan');
    }
  };

  return (
    <div className={styles.tablePlan}>
      <div className={styles.tittle}>Gestiona tu plan </div>

      <table>
        <thead>
          <tr>
            <th>Tipo de plan</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Ver</th>
            {mostrarPagar && <th>Pago</th>}
            {/* {mostrarCancelarPlan && <th>Cancela tu plan</th>} */}
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          <tr style={{backgroundColor: '#404040', color: 'white'}}>
            <td className={styles.club}>


              <select
                value={plan}
                onChange={(e) => changePlan(e)}
                className={styles.select}
              >
                <option value="" disabled>
                  Cambiar plan
                </option>    
                <option value="basico">Basico</option>
                <option value="club">Clubes</option>
                <option value="premium">Premium </option>
                 <option value="none">None</option>
                {/* <option></option> */}
                {/* <option value='none'>None </option> */}
              </select>
            </td>
            <td className={styles.nombre}>{detallePlan?.name}</td>
            <td className={styles.precio}>${detallePlan?.price}</td>
            <td className={styles.descuento}>{detallePlan?.desc}%</td>
            <td>
              <Link to="/clubs" className={styles.details}>
                  <RiEdit2Line style={{width: '25px', height: '25px'}}/>
              </Link>
            </td>
            {mostrarPagar && (
              <td>
                <Link to="/pay">
                  <button className={styles.continuar}>Continuar</button>
                </Link>
              </td>
            )}
            {/* {mostrarCancelarPlan &&
            ( <td>
                <button className={styles.cancelar}>Cancelar</button>
            </td> 
              )} */}
             
          </tr>
        </tbody>

        {/* ))} */}
      </table>
    </div>
  );
}
