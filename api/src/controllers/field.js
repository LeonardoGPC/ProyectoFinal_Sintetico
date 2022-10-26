const axios = require('axios');
const { Field } = require('../db');


async function getFields(){
    let fields = await Field.findAll();
    if(fields.length) return fields
    else throw new Error('No existen datos en la db') 
}

module.exports = {
    getFields,
}

