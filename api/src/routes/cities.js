const { Router } = require('express');
const router = Router();
const { getCities } = require('../controllers/cityController')

router.get('/', async (req, res) => {
    try {
        const cities = await getCities()
        res.json(cities)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})


module.exports = router;