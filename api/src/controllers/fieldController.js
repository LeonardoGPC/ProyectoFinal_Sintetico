const axios = require('axios');
const { Field, Facility, Surface, Size } = require('../db');
const { Op } = require("sequelize");

const queryParams = {
    attributes: ['name'],
    through: {
        attributes: [],
    },
};


 
async function getFields(){
    let fields = await Field.findAll({
        where: {
            isDeleted: {
                [Op.eq]: false
            }
        },
        include:{
            model: Size,
            ...queryParams,
            model: Surface,
            ...queryParams,
            model: Facility,
            ...queryParams
        },
        order: [
            ['id', 'ASC']
        ],
    });
    if(fields.length) return fields
    else throw new Error('there is no data in db') 
}

async function getFieldById(id){
    const field = await Field.findByPk(id, {
        where: {
            isDeleted: {
                [Op.eq]: false
            }
        },
        include:{
            model: Size,
            ...queryParams,
            model: Surface,
            ...queryParams,
            model: Facility,
            ...queryParams
        }
    })
    if(field) return field
    else throw new Error('Field does not exist in db') 
}

async function createField(fieldData){
    const { id, name, image, state, price, address, openHour, closeHour, facilities, size, surface, city } = fieldData;
    const field = { id, name, image, state, price, address, openHour, closeHour };
    try{
        const newField = await Field.create(field);
        await newField.setSize(size);
        await newField.setSurface(surface);
        await newField.setCity(city)
        if (facilities){
            await newField.addFacilities(facilities);
        }
        return "Field created successfully";
    }catch(error){
        console.log(error);
       throw new Error("Invalid Fields");
    }
    
}

async function deleteField(fieldId){
    try{
        var fieldFromDb = await Field.findByPk(fieldId);
        fieldFromDb.isDeleted = true;
        fieldFromDb.isNewRecord = false;
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

