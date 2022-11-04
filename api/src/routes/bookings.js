const { Router } = require("express");
const router = Router();
const { getBookings } = require("../controllers/bookingController");
const { Booking } = require("../db");

router.get("/", async (req, res) => {
    try {
      const bookings = await getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const { date, hour, FieldId } = req.body; //Remover id en un futuro
      const createBooking = await Booking.create({ date, hour, FieldId });
      res.json(createBooking)
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });



module.exports = router;