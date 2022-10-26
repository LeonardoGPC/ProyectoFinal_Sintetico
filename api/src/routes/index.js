const { Router } = require('express');
const fields = require('./fields')

const router = Router();

router.use('/canchas', fields)

module.exports = router;