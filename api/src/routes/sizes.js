const { Router } = require('express');
const router = Router();
const { getSizes } = require('../controllers/sizeController')

router.get('/', async (req, res) => {
    try {
        const sizes = await getSizes()
        res.json(sizes)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})


module.exports = router;