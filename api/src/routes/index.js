const { Router } = require('express');
const fields = require('./fields')
const facilities = require('./facilities')
const sizes = require('./sizes')
const surfaces = require('./surfaces')
const cities = require('./cities')
const comments = require('./comments')
const bookings = require("./bookings")
<<<<<<< HEAD
const uploads = require("./uploads")
=======
const users = require('./users')
const payments = require('./payments')
>>>>>>> ac3d910897c38ba5b3acd9526eba03ac24785dfe

const router = Router();

router.use('/fields', fields)
router.use('/sizes', sizes)
router.use('/facilities', facilities)
router.use('/surfaces', surfaces)
router.use('/cities', cities)
router.use('/comments', comments)
router.use("/bookings", bookings)
<<<<<<< HEAD
router.use("/uploads", uploads)

=======
router.use("/users", users)
>>>>>>> ac3d910897c38ba5b3acd9526eba03ac24785dfe

router.use('/payments', payments)
module.exports = router;