const { Router } = require('express');
const router = Router();
const { getFields, createField, deleteField, getFieldById } = require('../controllers/fieldController')

router.get('/', async (req, res) => {
    try {
        const fields =  await getFields();
        res.json(fields)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    try{
        const field = await getFieldById(id);
        res.json(field)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})


router.post('/', async (req, res)=>{
    var field = req.body;
    try{
        var successMessage = await createField(field);
        res.send(successMessage);
    }catch(error){
        res.status(404).send(error.message);
    }
    
});

router.delete('/:id', ({params:{id}}, res)=>{
    try{
        deleteField(id);
        res.send("Element was deleted");
    }catch(error){
        res.status(404).send(error.message);
    }
});

module.exports = router;
