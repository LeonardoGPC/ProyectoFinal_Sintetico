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

const [selected, setSelected] = useState(null)

const toggle = (i) => {
    if (selected === i) {
        return setSelected(null)
    }

    setSelected(i)
}



  return (
    <div className={style.wrapper}>
        <h1>Preguntas Frequentes</h1>
        <div className={style.div}>
        <div className={style.accordion}>{data.map((item, i) =>(
            <div className={style.item}>
                <div className={style.title} onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? style.show  : style.content}>{item.answer}</div>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Faq