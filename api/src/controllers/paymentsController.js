const axios = require('axios');
const mercadopago = require('mercadopago');
const { postBookings, editBooking } = require('./bookingController');


async function createOrdenLink({itemName, price, UserId, bookings}){
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN
    });
    //En description estará los datos que no se pueden obtener de la notificación de Mercado pago
    //(id de cada Booking creada)
    let idBooking = []
    for (const item of bookings) {
        let bookingData = {
            UserId: UserId,
            FieldId: item.FieldId,
            date: item.date,
            hour: item.hour,
        }
        idBooking.push(await postBookings(bookingData))
    }
    //idBooking = idBooking.map(e => e[0].dataValues.id)
    var preference = {
        items: [
            {
                title:  itemName,
                description: idBooking.join(','),
                quantity: 1,
                currency_id: 'COP',
                unit_price: price,
            }
        ],
        notification_url:  "https://b4dd-2800-484-c80-e234-a51f-819d-8d71-d0ac.ngrok.io/payments/notification",
        back_urls: {
            success: "http://localhost:3000/pay/success",
            failure: "http://localhost:3000/pay/failure",
            pending: "http://localhost:3000/"
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
        let bookingIds = status.additional_info.items[0].description.split(',')
            for (const bookingId of bookingIds) {
                await editBooking(bookingId, {
                    paymentStatus: status.status.toUpperCase()
                })
            }
    }
}

/* async function createBooking({idUser, idField, date, hour}){
    //procedemos a crear la reserva

    const newBooking = await Booking.create({date, hour})
    await newBooking.addFields(idField)
    await newBooking.addUsers(idUser)
    

} */

module.exports = {
    createOrdenLink,
    notificationOrden
}