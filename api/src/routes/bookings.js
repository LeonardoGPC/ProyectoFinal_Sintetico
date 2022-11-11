const { Router } = require("express");
const router = Router();
const { getBookings, postBookings, editBooking, getAllBookings} = require("../controllers/bookingController");
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
     // { date, hour, FieldId, UserId }
      const data = req.body; 
      
       await postBookings(data)
     
      res.json("success")
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });

  router.put('/:id', async (req, res)=>{
    const data = req.body;
    const {id: idBooking} = req.params; 
    try{
        await editBooking(idBooking, data);
        res.send("La reserva se edito exitosamente");
    }catch(error){
        res.status(404).send(error.message)
    }
});


module.exports = router;