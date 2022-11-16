import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import groupBy from 'json-groupby';
import { useParams } from 'react-router-dom';
import { DatePicker } from '@material-ui/pickers';
import Navbar from '../NavBar/Navbar.jsx';
import style from './Booking.module.css';
import image from '../img/niño.png';
import { postBooking, getFields, getBookings, getFieldDetail } from '../../redux/actions';
import Cookies from 'universal-cookie';
import{URL_APP} from '../../utils/utils.js'
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const d = new Date();
let actualHour = d.getHours();

function BookingAdmin() {
  const { id } = useParams();
  // const fields = useSelector((state) => state.fields);
  const bookings = useSelector((state) => state.bookings);

  // bookings.filter((booking)=>{
  //   if(booking)
  // })
  const dispatch = useDispatch();

  const [date, changeDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const [fieldId, setFieldId] = useState(id);

  const formattedDate = format(date, 'd/MM/yyyy');
  const bookingInfo = groupBy(bookings, ['date', 'Fields.id'], ['hour']);
  const takenHours = bookingInfo[formattedDate]?.[fieldId]?.hour ?? [];
  const detailField = useSelector((state) => state.detail)
  

  const [modal, setModal] = useState(false)
  const [dis, setDis] = useState(true)

  useEffect(() => {
    dispatch(getFields());
    dispatch(getBookings());
    dispatch(getFieldDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!localStorage.getItem('plan')){
    // await dispatch(
    //   postBooking({
    //     date: format(date, 'd/MM/yyyy'),
    //     FieldId: fieldId,
    //     hour,
    //     UserId: cookie.get('id'),
    //   }),
    // );
    await storageHandler()
    changeDate(new Date());
    setHour('');
    setFieldId('');
    window.location.replace('/pay');
    } else {
      setModal(true)
    }
  };

  useEffect(() => {
    if(hour.length <= 0){
      setDis(true)
    } else {
      setDis(false)
    }
  }, [hour])

  const popUp = async () => {
    // await dispatch(
    //   postBooking({
    //     date: format(date, 'd/MM/yyyy'),
    //     FieldId: fieldId,
    //     hour,
    //     UserId: cookie.get('id'),
    //   }),
    // );
    await storageHandler()
    changeDate(new Date());
    setHour('');
    setFieldId('');
    setModal(false)
    window.location.replace('/pay');
  }

  const storageHandler = () => {
    if(localStorage.getItem('plan')){
      localStorage.removeItem('plan')
    }
    if(localStorage.getItem('rent')){
      let obj = JSON.parse(localStorage.getItem('rent'))
      obj.push({id: detailField.id, name: detailField.name, price: detailField.price, date: format(date, 'd/MM/yyyy'), hour})
      localStorage.setItem('rent', JSON.stringify(obj))
    } else {
      let obj = [{id: detailField.id, name: detailField.name, price: detailField.price, date: format(date, 'd/MM/yyyy'), hour}]
      localStorage.setItem('rent', JSON.stringify(obj))
    }
  }


  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  const cookie = new Cookies();
  const usuario = cookie.get('usuario');

  if (typeof usuario === 'undefined') {
    window.location.replace(`${URL_APP}/login`);
    return null;
  }

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
            {/* <select
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
            </select> */}
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
                if(d.getDate() === date.getDate()){
                return (
                  <option
                    key={hour}
                    className={style.option}
                    value={hour}
                    disabled={takenHours.includes(hour) || hour < actualHour}
                  >
                    {hour}:00
                  </option>
                );}
                else{
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
                }
              })}
            </select>
            <button type="submit" className={style.button} disabled={dis}>Reservar</button>
          </div>
          {/* <img className={style.image} src={image} alt="niñito lindo" /> */}
          <img  className={style.imagecanchita }src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668607914/sintetico/cancha_rffhka.png" alt="niñito lindo" />
        </div>
      </form>
      {modal && <div className={style.modal_main}>
                <div className={style.modal_box}>
                    <p>Al hacer click en <b>Aceptar</b> se borrará el plan<br/>que tienes en tu carrito de compras.</p>
                    <h1>¿Quieres continuar?</h1>
                    <div className={style.modal_btns}>
                        <button onClick={() => setModal(false)}>Cancelar</button>
                        <button onClick={() => popUp()}>Aceptar</button>
                    </div>
                </div>
            </div>}
    </div>
  );
}

export default BookingAdmin;
