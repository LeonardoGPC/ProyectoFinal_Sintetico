const { Router } = require('express');
const router = Router();
const { createUser, getUser, getUsers } = require('../controllers/userController');
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

router.post("/login", 
    passport.authenticate('local',{
        failureRedirect: '/users/login',
        successRedirect: '/users' 
    })
);

router.get("/login", (req, res) => {
    res.send("error");
});

router.get("/profile", async (req, res) => {
    try{
        var userFromDb = await getUser(req.user.id);
        res.send(userFromDb);
    }catch(error){
        res.status(404).send(error.message);
    }
})

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router