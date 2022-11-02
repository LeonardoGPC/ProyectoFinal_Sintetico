const { default: axios } = require('axios');
const mercadopago = require('mercadopago');

async function createOrdenLink({itemName, price, idUser, idField, date, hour}){
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN
    });
    //En description estará los datos que no se pueden obtener de la notificación de Mercado pago
    //idUser, idField, date, hour
    var preference = {
        items: [
            {
                title:  `Reserva: ${itemName}`,
                description: `${idUser},${idField},${date},${hour}`,
                quantity: 1,
                currency_id: 'COP',
                unit_price: price,
            }
        ],
        notification_url:  "https://b4dd-2800-484-c80-e234-a51f-819d-8d71-d0ac.ngrok.io/payments/notification",
        back_urls: {
            success: "https://www.google.com",
            failure: "http://www.tu-sitio/failure",
            pending: "http://www.tu-sitio/pending"
        },
        auto_return: "approved",
    };
    
    let response = await mercadopago.preferences.create(preference)
    .catch(function (error) {
        console.log(error);
    });
    return response.body.init_point
}


 async function notificationOrden({id, topic}){
    if(id && topic === 'payment'){
        let status = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        })
        .catch((error) => console.log(error))
        status = status.data
        if(status.status === 'approved'){
            let descriptionData = status.additional_info.items[0].description.split(',')
            let bookingData = {
                idUser:  Number(descriptionData[0]),
                idField: Number(descriptionData[1]),
                date: descriptionData[2].split('-').join('/'),
                hour: Number(descriptionData[3]),
            }
            await createBooking(bookingData)
        }
    }
}

async function createBooking(){
    //procedemos a crear la reserva
    

}

module.exports = {
    createOrdenLink,
    notificationOrden
}