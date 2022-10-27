const { Router } = require('express');
const router = Router();
const { getSurface } = require('../controllers/surfaceController')

router.get('/', async (req, res) => {
    try {
        const surface = await getSurface()
        res.json(surface)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})


module.exports = router;