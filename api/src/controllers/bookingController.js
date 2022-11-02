const { Booking } = require("../db");

async function getBookings(){
    const allBookings = await Booking.findAll();
  if (allBookings.length) return allBookings;
  else throw new Error("No existen datos en la bd");
}


module.exports = {
    getBookings,
  };