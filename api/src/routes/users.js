const { Router } = require('express');
const router = Router();
const { createUser, authenticate, getUser, getUsers, editUser } = require('../controllers/userController');
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

router.get("/", async (req, res) => {
    try{
        var usersFromDb = await getUsers();
        res.send(usersFromDb);
    }catch(error){
        res.status(404).send(error);
    }
})
router.post("/login", async (req, res)=>{
    const {userName, password} = req.body;
    try{
        var message = await authenticate(userName, password);
        res.send(message);
    }catch(error){
        res.status(404).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    var {id} = req.params;
    try{
        var userFromDb = await getUser(id);
        res.send(userFromDb);
    }catch(error){
        res.status(404).send(error.message);
    }
})

router.put("/:id", async (req,res)=> {
    const { id } = req.params
    const data = req.body
    try {

        const userUpgrade = await editUser(id, data)

        res.status(200).send(userUpgrade)
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message);
    }
})
module.exports = router