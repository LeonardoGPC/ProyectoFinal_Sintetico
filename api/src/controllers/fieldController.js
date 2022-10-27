const axios = require('axios');
const { Field, Facility, Surface, Size } = require('../db');



async function getFields(){
    let fields = await Field.findAll();
    if(fields.length) return fields
    else throw new Error('there is no data in db') 
}

async function getFieldById(id){
    const field = await Field.findByPk(id, {
        include:{
            model: Size,
            attributes: ['name'],
            through: {
                attributes: [],
            },
            model: Surface,
            attributes: ['name'],
            through: {
                attributes: [],
            },
            model: Facility,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    if(field.length) return field
    else throw new Error('Field does not exist in db') 
}

async function createField(field){
    var { id, name, image, state, price, address, openHour, closeHour, facilities, size, surface, city } = field;
    var field = { id, name, image, state, price, address, openHour, closeHour };
    try{
        var newField = await Field.create(field);
        newField = await newField.setSize(size);
        newField = await newField.setSurface(surface);
        newField = await newField.setCity(city)
        if (facilities){
            await newField.addFacilities(facilities);
        }
        return newField;
    }catch(error){
        console.log(error);
       throw new Error("Campos inválidos");
    }
    
}

async function deleteField(fieldId){
    try{
        var fieldFromDb = await Field.findByPk(fieldId);
        fieldFromDb.isDeleted = true;
        await fieldFromDb.save();
    }catch(error){
        throw new Error("El elemento a borrar no existe");
    }
}
module.exports = {
    getFields,
    getFieldById,
    createField,
    deleteField
}

