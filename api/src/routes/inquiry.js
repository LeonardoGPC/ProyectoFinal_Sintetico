const { Router } = require("express");
const router = Router();
const { sendInquiryEmail } = require ("../controllers/mailController")



router.post("/", async (req, res) => {
    const {mail} = req.body
  console.log("body!!!",req.body)
    try {
      const inquiry = await sendInquiryEmail(mail);
      res.json(inquiry);
    } catch (error) {
      console.log(error)
      res.status(404).send({ error: error.message });
    }
  });

module.exports = router;