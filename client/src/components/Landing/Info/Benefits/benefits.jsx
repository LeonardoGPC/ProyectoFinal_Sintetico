import React from "react"
import s from "./benefits.module.css"


export default function Benefits () {
    return (
        <div className={s.container}>
            <div className={s.columnas}>
                    <div className={s.img}></div>
                    <div className={s.beneficios}>
                            <h1 className={s.title}>
                                Ahorra tiempo
                            </h1>
                            <p className={s.p}> 
                            ¡Nosotros entendemos lo valioso que es el tiempo para ustedes! Por eso contamos con una rápida selección de canchas que te van a permitir encontrar tu cancha ideal para vos y tus amigos en cuestión de minutos, con pagos al instante y reservas inmediatas!
                            </p>

                    </div>
            </div>
            <div className={s.columnas}>
                    <div className={s.img}></div>
                    <div className={s.beneficios}>
                            <h1 className={s.title}>
                                Calidad garantizada 
                            </h1>
                            <p className={s.p}> 
                            Todos  nuestros clubes son rigurosamente analizados para contar de forma precisa y detallada todas sus utilidades e instalaciones, por lo que si reservas con nosotros, quédate tranquilo, estás en buenas manos
                            </p>

                    </div>
            </div>
            <div className={s.columnas}>
                    <div className={s.img}></div>
                    <div className={s.beneficios}>
                            <h1 className={s.title}>
                                Facil de usar
                            </h1>
                            <p className={s.p}> 
                            Una aplicación pensada para vos! Apenas reserves se te enviará un mail con la confirmación de reserva. Cuando se acerque tu fecha podrás ver notificaciones de la cancha que reservaste para que no te duermas y juntes esos jugadores que te faltan
                            </p>
                    </div>
            </div>
        </div>
    )
}