const { Facility } = require('../db');

async function getFacilities(){
    const facilities = await Facility.findAll()
    if(facilities.length) return facilities;
    else throw new Error('No existen datos en la bd')
}

module.exports = {
    getFacilities,
}