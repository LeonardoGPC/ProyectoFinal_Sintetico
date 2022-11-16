const axios = require('axios');
const mercadopago = require('mercadopago');
const { postBookings, editBooking, getAllBookings } = require('./bookingController');
const { sendReservationEmail, sendPlanEmail } = require('./mailController');
const { editUser, editUserPlanType } = require('./userController');
const { getUser } = require ("./userController")

const url = process.env.CORS_URL  
const url_bk = process.env.CORS_URL_BK 

async function createBooking(UserId, bookings){
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
    return  idBooking.join(',')
}

async function createOrdenLink({itemName, price, UserId, bookings}){//reserva --- plan basic
    
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN
    });
    //En description estará los datos que no se pueden obtener de la notificación de Mercado pago
    //(id de cada Booking creada)
    let description = "";
    if(itemName.toLowerCase().includes('reserva')){
       description = await createBooking(UserId, bookings)
    }else {
        description = UserId.toString()
    }
    var preference = {
        items: [
            {
                title:  itemName,
                description: description,
                quantity: 1,
                currency_id: 'COP',
                unit_price: price,
            }
        ],
        notification_url:  `${url_bk}payments/notification`,
        back_urls: {
            success: `${url}pay/success`,
            failure: `${url}pay/failure`,
            pending: `${url}`
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
            let ArritemPurchase = status.additional_info.items[0].title.split(' ')
            

            if(ArritemPurchase[0].toLowerCase() === 'plan'){
                let userId = Number(status.additional_info.items[0].description)
                let userData = await getUser(userId)
                if(status.status === "approved"){
                    editUser(userId,{type: "club"})
                    editUserPlanType(userId, { planType: ArritemPurchase[1].toLowerCase() }) 
                    sendPlanEmail(userData)
                }
            }
            if(ArritemPurchase[0].toLowerCase() === 'reserva'){
                let dataMail= []
                let bookingIds = status.additional_info.items[0].description.split(',')
                for (const bookingId of bookingIds) {
                    await editBooking(bookingId, {
                        paymentStatus: status.status.toUpperCase()
                    })
                    
                    dataMail.push(await getAllBookings(bookingId))
                }
                if(status.status === 'approved'){
                    sendReservationEmail(dataMail)
                }
            }
    }
    
}



module.exports = {
    createOrdenLink,
    notificationOrden
}