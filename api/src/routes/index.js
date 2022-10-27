const { Router } = require('express');
const fields = require('./fields')
const facilities = require('./facilities')
const sizes = require('./sizes')
const surfaces = require('./surfaces')
const cities = require('./cities')

const router = Router();

router.use('/fields', fields)
router.use('/sizes', sizes)
router.use('/facilities', facilities)
router.use('/surfaces', surfaces)
router.use('/cities', cities)

module.exports = router;