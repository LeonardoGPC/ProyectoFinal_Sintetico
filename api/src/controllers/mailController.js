const { transport } = require('../mailer')


const {
    BOT_EMAIL,
  } = process.env;
const url = "http://localhost:3000" ||  process.env.CORS_URL 

module.exports.sendRegistrationEmail = (name, lastName, userName, email) => {
    transport.sendMail({
        
        from:  BOT_EMAIL,
        to: email,
        subject: "Registro exitoso ✨✅",
        html: 
        `<h1>Felicidades ${userName}❕❕ Tu registro ha sido completado con exito</h1>
        <h1>Que es Sintetic⚽?</h1>
        <h2>Bienvenido a la web de TUS canchas. En Sintetico podras hacer reservas al instante ⌚ y poner en alquiler tus canchas en minutos 💎</h2>
        <h2>Queres saber mas acerca de nosotros?</h2> <h2><a href= ${url}/about>Click Aqui ⚽</a></h2>
        <h2>Queres empezar a alquilar?</h2> <h2><a href= ${url}>Click Aqui ⚽</a></h2>`
        
        
        
        
    })
    .catch((err) => console.log(err))
}

module.exports.sendReservationEmail = (dataMail) => {

    let text = ``
    for (let i = 0; i < dataMail.length; i++) {
        text += 
       `<h2>Fecha: ${dataMail[i].date}</h2>
        <h2>Hora: ${dataMail[i].hour}</h2>
        <h2>Cancha: ${dataMail[i].fieldName}</h2>
        <h3>-----------------------------------------</h3>`
    }

     transport.sendMail({
        
        from:  BOT_EMAIL,
        to: dataMail[0].userEmail,
        subject: "Reserva completada ⚽✅",
        
        html: 
        `<h1>Felicidades ${dataMail[0].userName}❕❕ Ya tienes tus reservas listas</h1>
         <h1>${text}</h1>
         <h2>Ahora puedes revisar todas tus reservas en el perfil de la pagina o ingresando al siguiente link<h2> <h2> <a href=${url}/profile>Click Aqui ⚽</a></h2>`
         
        
        
    })
    .catch((err) => console.log(err))
}

module.exports.sendInquiryEmail = async (email) => {
    transport.sendMail({
        from:  BOT_EMAIL,
        to: email,
        subject: "Recibimos tu consulta ✅",
        html: 
        `<h1>Tu consulta ha sido recibida por un administrador</h1>
         <h1>En el lapso de algunas horas recibiras un email con la respuesta a tu consulta</h1>
         <h1>Muchas gracias por contar con nuestro servicio❕❕😃</h1>
         <h2>Puedes continuar a la pagina atravez del siguiente link</h2> <h2><a href= ${url}>Click Aqui ⚽</a></h2>` 
         
    })
    .catch((err) => console.log(err))
}

module.exports.sendPlanEmail = async (userData) => {
    transport.sendMail({
        from:  BOT_EMAIL,
        to: userData.email,
        subject: "Plan adquirido ✅",
        html: 
        `<h1>Felicidades ${userData.userName}❕❕ Ya tienes tus plan listo</h1>
         <h1>Muchas gracias por contar con nuestro servicio❕❕😃</h1>
         <h2>Puedes continuar a la pagina atravez del siguiente link</h2> <h2><a href= ${url}>Click Aqui ⚽</a></h2>` 
         
    })
    .catch((err) => console.log(err))
}

