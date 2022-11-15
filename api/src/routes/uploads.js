const { Router } = require('express');
const router = Router();
const {cloudinary} = require('../utils/cloudinary.js')

router.post('/', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'sintetico_setup'
        })
        res.json({url:uploadResponse.secure_url});
    } catch (error) {
        
        res.status(500).json({ err: 'upload failed' }); 
    }
})

module.exports = router;