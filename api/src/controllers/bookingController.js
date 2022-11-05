const {Booking, Field, User} = require("../db");

async function getBookings(){
    const allBookings = await Booking.findAll({
      where: {
        isCancel: false,
        // paymentStatus: "APPROVED"
        // se comenta porque se necesitan todas las reservaciones en la página del administrador
      },
      include: [{
        model: Field,
        attributes: ["id", "name"],
        through: {
        attributes: [],
        },
      }]
    });
  if (allBookings.length) return allBookings;
  else throw new Error("No existen datos en la bd");
}

async function postBookings({date, hour, FieldId, UserId}){
 try {
  const targetField = await Field.findByPk(FieldId)
  const booking = await Booking.create({ date, hour })
  // const targetUser = await User.findByPk(UserId) 

  // await targetUser.addBooking(booking)
  await booking.addField(targetField)

  //const newBooking = await targetUser.addField(targetField, { through: { date: date, hour: hour  } })
  //console.log(booking.dataValues.id)
  return booking.dataValues.id;

 } catch (error) {
    console.log(error)
 }

}

async function editBooking(bookingId, data){
  try{
      let booking = await Booking.findByPk(Number(bookingId));
      await booking.update(data);
      await booking.save();
  }catch(error){
    console.log(error)
      throw new Error("El elemento a editar no existe o los parámetros no son válidos");
  }
}



module.exports = {
    getBookings,
    postBookings,
    editBooking
  };