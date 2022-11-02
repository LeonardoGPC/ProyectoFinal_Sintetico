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
      const { id, date, hour } = req.body; //Remover id en un futuro
      const createBooking = await Booking.create({ id, date, hour });
      res.json(createBooking)
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });



module.exports = router;