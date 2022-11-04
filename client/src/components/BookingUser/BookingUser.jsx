import React from 'react';
import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { format } from 'date-fns';
import { DatePicker } from '@material-ui/pickers';
import style from './BookingUser.module.css';
import { postBooking} from '../../redux/actions/index.js';
import Navbar from '../NavBar/Navbar';
import niñoBalon from '../img/niño.png';



function BookingUser() {
  const dispatch = useDispatch();
  const [date, changeDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const [fieldId, setFieldId] = useState('');

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
      <Navbar />

      <h1 className={style.tittle}>Realiza tu reserva</h1>
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
            <button type="submit" className={style.buttonReserve}>
              Reservar
            </button>
          </div>
        </div>
        <div>
          <img className={style.ball} src={niñoBalon} alt="niñoBalon" />
        </div>
      </div>
    </form>
  );
}

export default BookingUser;
