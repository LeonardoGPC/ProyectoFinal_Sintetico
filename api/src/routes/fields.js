const { Router } = require('express');
const router = Router();
const { getFields } = require('../controllers/field')

router.get('/', async (req, res) => {
    try {
        const fields =  await getFields();
        res.json(fields)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})
module.exports = router;
