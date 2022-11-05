const { Router } = require('express')
const { createOrdenLink, notificationOrden } = require('../controllers/paymentsController')

const router = Router()

router.post('/', async(req, res) => {
    const data = req.body
    try {
        const response = await createOrdenLink(data)
        res.json(response)
    } catch (error) {
        console.log(error)
        res.status(404).json({error: error.message})
    }
})

router.post('/notification', async(req, res) => {
    const data = req.query
    try {
       await notificationOrden(data)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router