const { Router } = require('express');
const router = Router();
const { getFacilities } = require('../controllers/facilityController')

router.get('/', async (req, res) => {
    try {
        const facilities = await getFacilities()
        res.json(facilities)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})


module.exports = router;