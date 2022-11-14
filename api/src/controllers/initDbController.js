const { Surface, Size, Facility, City, Field, Comment, Booking, User } = require("../db");
const { SURFACES } = require("../initData/surfaces");
const { SIZES } = require("../initData/sizes");
const { FACILITIES } = require("../initData/facilities");
const { CITIES } = require("../initData/cities");
const { FIELDS } = require("../initData/fields");
const { COMMENTS } = require("../initData/comments");
const { BOOKINGS } = require("../initData/booking")
const { USERS } = require ("../initData/user")

async function chargeDb() {
  const surface = await Surface.findAll();
  if (!surface.length) await Surface.bulkCreate(SURFACES);
  const size = await Size.findAll();
  if (!size.length) await Size.bulkCreate(SIZES);
  const facility = await Facility.findAll();
  if (!facility.length) await Facility.bulkCreate(FACILITIES);
  const city = await City.findAll();
  if (!city.length) await City.bulkCreate(CITIES);
  const users = await User.findAll();
  if (!users.length) await User.bulkCreate(USERS)
  const fields = await Field.findAll();
  if (!fields.length) await Field.bulkCreate(FIELDS);
  const comments = await Comment.findAll();
  if (!comments.length) await Comment.bulkCreate(COMMENTS);

  //Se crean las reservas
  await Booking.bulkCreate(BOOKINGS) 
  const bookings = await Booking.findAll()
  let countIdfield = 1
  //Se vinculan las reservas con cada cancha
  for (let i = 0; i < bookings.length; i++) {
    let booking = bookings[i]
    await booking.addField(countIdfield)
    countIdfield++
    if(countIdfield >= 10) countIdfield = 1;
  }
 
  
  //Se vinculan las facilities a cada cancha
  const cancha1 = await Field.findByPk(1);
  await cancha1.addFacilities([1, 2]);
  const cancha2 = await Field.findByPk(2);
  await cancha2.addFacilities([2]);
  const cancha3 = await Field.findByPk(3);
  await cancha3.addFacilities([1, 2, 3]);
  const cancha4 = await Field.findByPk(4);
  await cancha4.addFacilities([1, 2]);
  const cancha5 = await Field.findByPk(5);
  await cancha5.addFacilities([2]);
  const cancha6 = await Field.findByPk(6);
  await cancha6.addFacilities([1, 2, 3]);
  const cancha7 = await Field.findByPk(7);
  await cancha7.addFacilities([1, 2]);
  const cancha8 = await Field.findByPk(8);
  await cancha8.addFacilities([2]);
  const cancha9 = await Field.findByPk(9);
  await cancha9.addFacilities([1, 2, 3]);
  const cancha10 = await Field.findByPk(10);
  await cancha10.addFacilities([1, 2, 3]);




  
}

module.exports = {
  chargeDb,
};
