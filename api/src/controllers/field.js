const axios = require('axios');
const { Field } = require('../db');


async function getFields(){
    let fields = await Field.findAll();

    return fields;
}

module.exports = {
    getFields,
}

