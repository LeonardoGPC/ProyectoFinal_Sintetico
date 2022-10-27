const { Size } = require('../db');

async function getSizes(){
    const sizes = await Size.findAll()
    if(sizes.length) return sizes;
    else throw new Error('No existen datos en la bd')
}

module.exports = {
    getSizes,
}