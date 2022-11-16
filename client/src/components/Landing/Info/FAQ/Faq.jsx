import React, { useState } from 'react'
import style from './Faq.module.css'

const data = [{
    question: '¿Qué datos necesito para registrarme?',
    answer: 'Para registrarte en Sintento, deberás iniciar sesión con Google o podrás ingresar completando un formulario con tus datos. Esto nos servirá para poder dejar los datos de la reserva al club.'
},
{
    question: '¿Cómo reservar un turno para jugar?',
    answer: 'Para reservar una cancha es tan sencillo como ingresar una localidad, tamaño y superficie, y así podrás ver la disponibilidad. Luego, deberás abonar el valor de la reserva con tu cuenta de Mercado Pago o accediendo como invitado.'
},
{
    question: '¿Cuanto tiempo tengo para cancelar una reserva?',
    answer: 'La cancelación siempre dependerá de las políticas del club. De todas maneras siempre las sabrás antes de reservar, ya que nosotros te las informaremos antes de procesar el pago. En caso de lluvia, podrás contactarte directamente con el club y así el mismo club gestionará la devolución de la seña en caso de que corresponda.'
},
{
    question: '¿Qué pasa si no voy a jugar?',
    answer: 'En caso de que no te presentes, perderás el monto de la reserva. Es importante que canceles lo antes posible para poder permitirle a otros usuarios que practiquen deporte. '
}]



const Faq = () => {

const [theSwitch, setTheSwitch] = useState({0: '40px', 1: '40px', 2: '40px', 3: '40px'})



  return (
    <div className={style.container}>
        <h1>Preguntas frecuentes</h1>
        {/* {data.map((item, i) => 
        <div key={i} className={style.quest} style={{height: theSwitch[i]}}>
            <div className={style.title_quest} onClick={() => (theSwitch[i] === '40px' ? setTheSwitch({...theSwitch, [i]: 'max-content'}) : setTheSwitch({...theSwitch, [i]: '40px'}))}>
                <h2>{item.question}</h2>
                <span className={style.span}>+</span>
            </div>
            <p className={style.answer}>{item.answer}</p>
        </div>
        )} */}
        <div className={style.quest} style={{height: theSwitch[0]}} onClick={() => (theSwitch[0] === '40px' ? setTheSwitch({...theSwitch, 0: '90px'}) : setTheSwitch({...theSwitch, 0: '40px'}))}>
            <div className={style.title_quest}>
                <h2>{data[0].question}</h2>
                <span className={style.span}>{theSwitch[0] === '40px' ? '+' : '-'}</span>
            </div>
            <p className={style.answer}>{data[0].answer}</p>
        </div>
        <div className={style.quest} style={{height: theSwitch[1]}} onClick={() => (theSwitch[1] === '40px' ? setTheSwitch({...theSwitch, 1: '110px'}) : setTheSwitch({...theSwitch, 1: '40px'}))}>
            <div className={style.title_quest}>
                <h2>{data[1].question}</h2>
                <span className={style.span}>{theSwitch[1] === '40px' ? '+' : '-'}</span>
            </div>
            <p className={style.answer}>{data[1].answer}</p>
        </div>
        <div className={style.quest} style={{height: theSwitch[2]}} onClick={() => (theSwitch[2] === '40px' ? setTheSwitch({...theSwitch, 2: '130px'}) : setTheSwitch({...theSwitch, 2: '40px'}))}>
            <div className={style.title_quest}>
                <h2>{data[2].question}</h2>
                <span className={style.span}>{theSwitch[2] === '40px' ? '+' : '-'}</span>
            </div>
            <p className={style.answer}>{data[2].answer}</p>
        </div>
        <div className={style.quest} style={{height: theSwitch[3]}}  onClick={() => (theSwitch[3] === '40px' ? setTheSwitch({...theSwitch, 3: '90px'}) : setTheSwitch({...theSwitch, 3: '40px'}))}>
            <div className={style.title_quest}>
                <h2>{data[3].question}</h2>
                <span className={style.span}>{theSwitch[3] === '40px' ? '+' : '-'}</span>
            </div>
            <p className={style.answer}>{data[3].answer}</p>
        </div>
    </div>
  )
}

export default Faq