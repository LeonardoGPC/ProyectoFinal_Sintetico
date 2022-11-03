const {Booking, Field, User} = require("../db");

async function getBookings(){
    const allBookings = await Booking.findAll();
  if (allBookings.length) return allBookings;
  else throw new Error("No existen datos en la bd");
}

async function postBookings(date, hour, FieldId, UserId){

 try {
  const targetField = await Field.findByPk(FieldId)
  const targetUser = await User.findByPk(UserId) 

  targetUser.addField(targetField, { through: { date: date, hour: hour  } })
  
 } catch (error) {
    console.log(error)
 }

}



module.exports = {
    getBookings,
    postBookings
  };