import React, { useState } from 'react'
import style from './Faq.module.css'

const data = [{
    question: 'Pregunta 1',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum.'
},
{
    question: 'Pregunta 2',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum, magna eget venenatis vestibulum.'
},
{
    question: 'Pregunta 3',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum, magna eget venenatis vestibulum, ipsum eros varius velit.'
},
{
    question: 'Pregunta 4',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum, magna eget venenatis vestibulum, ipsum eros varius velit, quis mattis felis nunc in metus.'
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