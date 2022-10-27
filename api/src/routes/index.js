const { Router } = require('express');
const fields = require('./fields')
const facilities = require('./facilities')
const sizes = require('./sizes')
<<<<<<< HEAD
//const surfaces = require('./surfaces')
=======
const surfaces = require('./surfaces')
const cities = require('./cities')

>>>>>>> Nicolas
const router = Router();

router.use('/fields', fields)
router.use('/sizes', sizes)
router.use('/facilities', facilities)
<<<<<<< HEAD
//router.use('/surfaces', surfaces)
=======
router.use('/surfaces', surfaces)
router.use('/cities', cities)
>>>>>>> Nicolas

module.exports = router;