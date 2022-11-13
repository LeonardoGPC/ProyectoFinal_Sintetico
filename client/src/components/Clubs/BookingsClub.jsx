import React from "react";
import styles from './bookingsClub.module.css'


export default function BookingsClub() {

    return(
        <div className={styles.tableBookings}>
            <div className={styles.reservas}>Reservas de canchas</div>
             <table>
          <thead>
            <tr>
               <th>Fecha</th>
               <th>Horario</th>
              <th>Cancha</th>
              
            </tr>
          </thead>
            <tbody className={styles.tbody}>
              <tr>
            
                <td>15/11/22</td>
                <td>8:00</td>
                <td>Mi canchita</td>
                
              </tr>
            </tbody>

        </table>
            

        </div>
    )
}