const { Router } = require("express");
const router = Router();
const { getBookings, postBookings} = require("../controllers/bookingController");
const { Booking, Field, User } = require("../db");

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
      const { date, hour, FieldId, UserId } = req.body; 
      
       await postBookings(date, hour, FieldId, UserId)
     
      res.json("success")
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });



module.exports = router;