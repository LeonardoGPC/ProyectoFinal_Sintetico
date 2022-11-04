const { Router } = require('express');
const router = Router();
const { createUser, authenticate, getUser } = require('../controllers/userController');
const passport = require('passport');

require("../passportConfig")(passport);


router.post("/", async (req, res) => {
    var userData = req.body;
    try {
        var successMessage = await createUser(userData);
        res.send(successMessage);
    }catch(error){
        res.status(404).send(error.message);
    }
});

router.post("/login", async (req, res)=>{
    const {userName, password} = req.body;
    try{
        var message = await authenticate(userName, password);
        res.send(message);
    }catch(error){
        res.status(404).send(error.message);
    }
});

router.get("/profile", async (req, res) => {
    try{
        var userFromDb = await getUser(1);
        res.send(userFromDb);
    }catch(error){
        res.status(404).send(error);
    }
})
module.exports = router