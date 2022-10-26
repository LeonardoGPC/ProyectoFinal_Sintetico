const axios = require('axios');
const { Field, Facility, Surface, Size} = require('../db');



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
    var { id, name, image, state, price, address, openHour, closeHour, facilities, size, surface } = field;
    var field = { id, name, image, state, price, address, openHour, closeHour };
    try{
        var newField = await Field.create(field);
        if (facilities){
            newField = await Field.addFacilitys(facilities);
        }
        newField = await Field.setSize(size);
        newField = await Field.setSurface(surface);
        return newField;
    }catch(error){
        var {errors: [{message: errorMessage}]} = error;
        throw new Error(errorMessage);
    }
}

async function deleteField(fieldId){
    var query = {where: {id: fieldId}};
    var fieldFromDb = await Field.findByPk(fieldId);
    
    return fieldFromDb;
}
module.exports = {
    getFields,
    getFieldById,
    createField
}

