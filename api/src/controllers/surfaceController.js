const { Surface } = require('../db')


async function getSurface(){
    const surface = await Surface.findAll()
    if(surface.length) return surface;
    else throw new Error('No existen datos en la bd')
}

module.exports = {
    getSurface
}