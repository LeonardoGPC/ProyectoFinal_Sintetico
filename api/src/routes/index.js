const { Router } = require('express');
const fields = require('./fields')
const facilities = require('./facilities')
const facilities = require('./facilities')
const router = Router();

router.use('/fields', fields)
router.use('/sizes', sizes)
router.use('/facilities', facilities)

module.exports = router;