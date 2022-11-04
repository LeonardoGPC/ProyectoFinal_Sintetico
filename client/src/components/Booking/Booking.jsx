import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DatePicker } from '@material-ui/pickers';
import style from './Booking.module.css';
import { postBooking } from '../../redux/actions';
import Navbar from '../NavBar/Navbar';
import { useParams } from 'react-router-dom';

// import balon from '../img/balon.png'

function Booking() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [date, changeDate] = useState(new Date());
  const [input, setInput] = useState('');


  const onClickHandler = () => {
    changeDate(0)
    setInput(0)
    dispatch(postBooking({date, FieldId: id, input }));
  };

  const handleInputChange = (e) => {
    const { target } = e;

    let targetValue = target.value;

    setInput({ ...input, [target.name]: targetValue });
  };

  return (
    <div className={style.principalContainer}>
      <Navbar />

      <h1 className={style.tittle}>Reserva tu cancha</h1>
      <div className={style.containers}>
        <div className={style.container}>
          <div className={style.date}>
          <DatePicker
            autoOk
            orientation="landscape"
            variant="static"
            minDate={new Date()}
            openTo="date"
            color="green lighten-1"
         
            value={date}
            // dateFormat='dd-MMM-yyy'
            onChange={(newValue)=> {
              changeDate(newValue)
            }}
            name={date}
            className={style.Date}
          />
          </div>
          <div className={style.contenedorSelect}>
            <p className={style.parrafo}>Seleccione una hora</p>
            <select  name='hour' onChange={handleInputChange} className={style.select}>
              <option className={style.option } value="Title"> Hora </option>
              <option className={style.option } value="8"> 8:00 </option>
              <option className={style.option } value="9"> 9:00 </option>
              <option className={style.option } value="10"> 10:00 </option>
              <option className={style.option } value="11"> 11:00 </option>
              <option className={style.option } value="12"> 12:00 </option>
              <option className={style.option } value="13"> 13:00 </option>
              <option className={style.option } value="14"> 14:00 </option>
              <option className={style.option } value="15"> 15:00 </option>
              <option className={style.option } value="16"> 16:00 </option>
              <option className={style.option } value="17"> 17:00 </option>
              <option className={style.option } value="18"> 18:00 </option>
              <option className={style.option } value="19"> 19:00 </option>
              <option className={style.option } value="20"> 20:00 </option>
              <option className={style.option } value="21"> 21:00 </option>
              <option className={style.option } value="22"> 22:00 </option>
              <option className={style.option } value="23"> 23:00 </option>
            </select>
            <button onClick={onClickHandler} className={style.buttonReserve}>
              Reservar
            </button>
          </div>
         
        </div> 
         <div className={style.ball}>
            {/* <img   className={style.ball}src={balon} alt="balon"/> */}
          </div>
      </div> 
    
    </div>
  );
}

export default Booking;
