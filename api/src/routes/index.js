const { Router } = require('express');
const fields = require('./fields')
const facilities = require('./facilities')
const sizes = require('./sizes')
const surfaces = require('./surfaces')
const cities = require('./cities')
const comments = require('./comments')
const clubs = require('./clubs')
const bookings = require("./bookings")

const router = Router();

router.use('/fields', fields)
router.use('/sizes', sizes)
router.use('/facilities', facilities)
router.use('/surfaces', surfaces)
router.use('/cities', cities)
router.use('/comments', comments)
router.use('/clubs', clubs)
router.use("/bookings", bookings)

module.exports = router;