const axios = require('axios');
const { Field, Facility, Surface, Size, City } = require('../db');
const { Op } = require("sequelize");

const queryParams = {
    attributes: ['name'],
    through: {
        attributes: [],
    },
};

const queryParams2 = {
    attributes: ['name'],
};


 
async function getFields(){
    let fields = await Field.findAll({
        where: {
            isDeleted: {
                [Op.eq]: false
            }
        },
        include:[
            {
                model: Size,
                ...queryParams2,
            },
            {
                model: Surface,
                ...queryParams2
            },
            {
                model: City,
                ...queryParams2
            },
            {
                model: Facility,
                ...queryParams
            }
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
        include:[
            {
                model: Size,
                ...queryParams2,
            },
            {
                model: Surface,
                ...queryParams2
            },
            {
                model: City,
                ...queryParams2
            },
            {
                model: Facility,
                ...queryParams
            }
        ]
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

async function editField(fieldId, data){
    try{
        var fieldFromDb = await Field.findByPk(fieldId);
        await fieldFromDb.update(data);
        fieldFromDb.isNewRecord = false;
        await fieldFromDb.save();
    }catch(error){
        throw new Error("El elemento a editar no existe o los parámetros no son válidos");
    }
}
module.exports = {
    getFields,
    getFieldById,
    createField,
    deleteField,
    editField
}
