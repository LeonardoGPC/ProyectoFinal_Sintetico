import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { DatePicker } from '@material-ui/pickers';
import style from './BookingAdmin.module.css';
import { postBooking, getFields } from '../../redux/actions';
import Navbar from '../NavBar/Navbar';


import niñoBalon from '../img/niñoBalon.png'

function BookingAdmin() {
  
  const fields = useSelector((state) => state.fields);
  const dispatch = useDispatch();

  const [date, changeDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const [fieldId, setFieldId] = useState('');

  useEffect(() => {
    dispatch(getFields());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postBooking({ date: format(date, 'd/MM/yyyy'), FieldId: fieldId, hour }),
    );
    changeDate(new Date());
    setHour('');
    setFieldId('');
  };


  const handleHourChange = (e) => {
    setHour(e.target.value);
  };


  return (

    <form className={style.principalContainer} onSubmit={handleSubmit}>
      <Navbar/>
      <h1 className={style.tittle}>Gestion de reservas</h1>
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
              onChange={(newValue) => {
                changeDate(newValue);
              }}
              name="date"
              className={style.Date}
            />
          </div>
          <div className={style.contenedorSelect}>
          
            <select
              name="hour"
              onChange={handleHourChange}
              className={style.select}
              value={hour}
              required
            >
              <option value="">Seleccione hora</option>
              <option className={style.option} value="8">
                8:00
              </option>
              <option className={style.option} value="9">
                9:00
              </option>
              <option className={style.option} value="10">
                10:00
              </option>
              <option className={style.option} value="11">
                11:00
              </option>
              <option className={style.option} value="12">
                12:00
              </option>
              <option className={style.option} value="13">
                13:00
              </option>
              <option className={style.option} value="14">
                14:00
              </option>
              <option className={style.option} value="15">
                15:00
              </option>
              <option className={style.option} value="16">
                16:00
              </option>
              <option className={style.option} value="17">
                17:00
              </option>
              <option className={style.option} value="18">
                18:00
              </option>
              <option className={style.option} value="19">
                19:00
              </option>
              <option className={style.option} value="20">
                20:00
              </option>
              <option className={style.option} value="21">
                21:00
              </option>
              <option className={style.option} value="22">
                22:00
              </option>
              <option className={style.option} value="23">
                23:00
              </option>
            </select>
            <select
              name="field"
              onChange={(e) => setFieldId(e.target.value)}
              value={fieldId}
              className={style.select}
              required
            >
              <option value="">Seleccione cancha</option>
              {fields.map((field) => {
                return (
                  <option key={field.id} value={field.id}>
                    {field.name}
                  </option>
                );
              })}
            </select>
            <button type="submit" className={style.buttonReserve}>
              Reservar
            </button>
          </div>
        </div>
        <div className={style.ball}>
          <img className={style.ball} src={niñoBalon} alt="niñoBalon"/> 
        </div>
      </div>
    </form>
  );
}

export default BookingAdmin;
