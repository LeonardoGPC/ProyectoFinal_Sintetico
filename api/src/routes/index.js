const { Router } = require('express');
const fields = require('./fields')
const facilities = require('./facilities')
const sizes = require('./sizes')
const surfaces = require('./surfaces')
const cities = require('./cities')
const comments = require('./comments')
const score= require('./score')
const bookings = require("./bookings")
const users = require('./users')
const payments = require('./payments')

const router = Router();

router.use('/fields', fields)
router.use('/sizes', sizes)
router.use('/facilities', facilities)
router.use('/surfaces', surfaces)
router.use('/cities', cities)
router.use('/comments', comments)
router.use('/score', score)
router.use("/bookings", bookings)
router.use("/users", users)

router.use('/payments', payments)
module.exports = router;