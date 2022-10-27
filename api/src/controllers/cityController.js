const { City } = require('../db');


async function getCities(){
    const cities = await City.findAll()
    if(cities.length) return cities;
    else throw new Error('No existen datos en la bd')
}

module.exports = {
    getCities,
}