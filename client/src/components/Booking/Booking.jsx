import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import groupBy from 'json-groupby';
import { DatePicker } from '@material-ui/pickers';
import Navbar from '../NavBar/Navbar.jsx';
import style from './Booking.module.css';
import image from '../img/niño.png';
import { postBooking, getFields, getBookings } from '../../redux/actions';

const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

function BookingAdmin() {
  const fields = useSelector((state) => state.fields);
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  const [date, changeDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const [fieldId, setFieldId] = useState('');

  const formattedDate = format(date, 'd/MM/yyyy');
  const bookingInfo = groupBy(bookings, ['date', 'Fields.id'], ['hour']);
  const takenHours = bookingInfo[formattedDate]?.[fieldId]?.hour ?? [];

  useEffect(() => {
    dispatch(getFields());
    dispatch(getBookings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      postBooking({ date: format(date, 'd/MM/yyyy'), FieldId: fieldId, hour, UserId: 1 }),
    );
    changeDate(new Date());
    setHour('');
    setFieldId('');
    dispatch(getBookings());
  };

  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.tittle}>Gestion de reservas</h1>
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
              onChange={(newValue) => {
                changeDate(newValue);
              }}
              name="date"
              className={style.Date}
            />
          </div>
          <div className={style.contenedorSelect}>
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
            <select
              name="hour"
              onChange={handleHourChange}
              className={style.select}
              value={hour}
              required
              disabled={!fieldId}
            >
              <option value="">Seleccione hora</option>
              {hours.map((hour) => {
                return (
                  <option
                    key={hour}
                    className={style.option}
                    value={hour}
                    disabled={takenHours.includes(hour)}
                  >
                    {hour}:00
                  </option>
                );
              })}
            </select>
            <button type="submit" className={style.buttonReserve}>
              Reservar
            </button>
          </div>
          <img className={style.image} src={image} alt="niñito lindo" />
        </div>
      </form>
    </div>
  );
}

export default BookingAdmin;
