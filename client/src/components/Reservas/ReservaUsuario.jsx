import React from 'react';
import style from './reservasUsuario.module.css'

export function ReservaUsuario() {
  return (
    <div className={style.contenedorReservas}>
      <div>
        <h3>Mis Reservas</h3>
      </div>
      <table>
        <thead>
            <tr>
                    <th>Cancha</th>
                    <th>Fecha</th>
                    <th>Horario</th>
                    <th>Opciones</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
       
    </div>
  );
}
