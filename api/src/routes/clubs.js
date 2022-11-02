const { Router } = require('express');
const router = Router();
const { createClub, authenticate } = require('../controllers/clubController');

router.post("/", async (req, res) => {
    var clubData = req.body;
    try {
        var successMessage = await createClub(clubData);
        res.send(successMessage);
    }catch(error){
        res.status(404).send(error.message);
    }
});

router.post("/login", async (req, res)=>{
    const {userName, password} = req.body;
    try{
        var message = await authenticate(userName, password);
        res.cookie('id', message).send(message);
    }catch(error){
        res.status(404).send(error.message);
    }
});

module.exports = router