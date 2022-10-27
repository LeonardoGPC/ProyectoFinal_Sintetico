const { Router } = require('express');
const router = Router();
const { getFields, createField, deleteField, editField } = require('../controllers/fieldController')

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
    var field = req.body;
    try{
        var newField = await createField(field);
        res.send(newField);
    }catch(error){
        res.status(404).send(error.message);
    }
    
});

router.delete('/:id', async ({params:{id}}, res)=>{
    try{
        await deleteField(id);
        res.send("Elemento borrado");
    }catch(error){
        res.status(404).send(error.message);
    }
});

router.put('/:id', async ({params: {id}, body}, res)=>{
    try{
        var editedField = await editField(id, body);
        res.send(editedField);
    }catch(error){
        res.status(404).send(error.message)
    }
});
module.exports = router;
