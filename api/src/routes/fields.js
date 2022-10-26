const { Router } = require('express');
const router = Router();
const { getFields, createField } = require('../controllers/fieldController')

router.get('/', async (req, res) => {
    try {
        const fields =  await getFields();
        res.json(fields)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const field = await getFieldById();
        res.json(field)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})


router.post('/', async (req, res)=>{
    var field = res.body;
    try{
        var newField = createField(field);
    }catch(error){
        res.status(404).send({errorMessage: error.message})
    }
    res.send(newField);
});

router.delete('/:id', ({params:{id}}, res)=>{
    try{
        deleteField(id);
    }catch(error){
        res.send(error.message);
    }
});
module.exports = router;
