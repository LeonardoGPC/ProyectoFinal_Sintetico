const { Router } = require('express');
const router = Router();
const { createUser, getUser, getUsers, createGoogleUser, authenticate } = require('../controllers/userController');
const passport = require('passport');


router.post("/", async (req, res) => {
    var userData = req.body;
    try {
        var successMessage = await createUser(userData);
        res.send(successMessage);
    }catch(error){
        res.status(404).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    var {id} = req.params;
    try{
        var message = await getUser(id);
        res.send(message);
    }catch(error){
        res.status(404).send(error);
    }
});

router.post("/googleAuth", async (req, res) => {
    var userData = req.body;
    try{
        var successMessage = await createGoogleUser(userData);
        res.send(successMessage);
    }catch (error){
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

/* router.post("/login", 
    passport.authenticate('local',{
        failureRedirect: '/users/login',
        successRedirect: '/users/profile' 
    })
); */
router.post("/login", async (req, res) => {
    var {userName, password} = req.body;
    try{
        var message = await authenticate(userName, password);
        res.send(message);
    }catch(error){
        res.status(404).send(error);
    }
});

router.get("/login", (req, res) => {
    console.log("error: usuario no encontraoo")
    res.status(404).send("usuario no encontrado");
});

function isAuthenticated(req, res, next) {
    console.log(req.user);
    if (req.user)
        return next();
    res.redirect('/users/login');
}

router.get("/profile", isAuthenticated, async (req, res) => {
    try{
        var userFromDb = await getUser(req.user.id);
        res.send(userFromDb);
    }catch(error){
        console.log(error);
        res.status(404).send(error.message);
    }
})

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/users');
    });
});

router.get("/google", 
    passport.authenticate('google', {scope: ['email', 'profile']}));

router.get("/google/callback", 
    passport.authenticate('google',{
        successRedirect: '/users/',
        failureRedirect: '/users/login'
    }));
    
module.exports = router