const { Surface, Size, Facility, City, Field, Comment, Booking } = require("../db");
const { SURFACES } = require("../initData/surfaces");
const { SIZES } = require("../initData/sizes");
const { FACILITIES } = require("../initData/facilities");
const { CITIES } = require("../initData/cities");
const { FIELDS } = require("../initData/fields");
const { COMMENTS } = require("../initData/comments");
const { BOOKINGS } = require("../initData/booking")

async function chargeDb() {
  const surface = await Surface.findAll();
  if (!surface.length) await Surface.bulkCreate(SURFACES);
  const size = await Size.findAll();
  if (!size.length) await Size.bulkCreate(SIZES);
  const facility = await Facility.findAll();
  if (!facility.length) await Facility.bulkCreate(FACILITIES);
  const city = await City.findAll();
  if (!city.length) await City.bulkCreate(CITIES);
  const fields = await Field.findAll();
  if (!fields.length) await Field.bulkCreate(FIELDS);
  const comments = await Comment.findAll();
  if (!comments.length) await Comment.bulkCreate(COMMENTS);
  const bookings = await Booking.findAll()
  if(!bookings.length) await Booking.bulkCreate(BOOKINGS)

  const cancha1 = await Field.findByPk(1);
  await cancha1.addFacilities([1, 2]);
  const cancha2 = await Field.findByPk(2);
  await cancha2.addFacilities([2]);
  const cancha3 = await Field.findByPk(3);
  await cancha3.addFacilities([1, 2, 3]);

  const comment1 = await Field.findByPk(1);
  await comment1.addComment([1]);
  const comment2 = await Field.findByPk(2);
  await comment2.addComment([3, 4]);
  const comment3 = await Field.findByPk(3);
  await comment3.addComment([2, 4]);

  const booking1 = await Field.findByPk(1)
  await booking1.addBookings([1, 3, 7])
  const booking2 = await Field.findByPk(2)
  await booking2.addBookings([2,4,5])
  const booking3 = await Field.findByPk(3)
  await booking3.addBookings([6,8,9])
  const booking4 = await Field.findByPk(4)
  await booking4.addBookings([10,12])
  const booking5 = await Field.findByPk(5)
  await booking5.addBookings([11,13,14])
  const booking6 = await Field.findByPk(6)
  await booking6.addBookings([15,16,17,18])
}

module.exports = {
  chargeDb,
};
