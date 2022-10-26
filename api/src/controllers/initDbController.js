const { Surface, Size, Facility, City } = require('../db')
const { SURFACES, SIZES, FACILITIES, CITIES } = require('../initData')



async function chargeDb(){
    const surface = await Surface.findAll()
    if(!surface.length) await Surface.bulkCreate(SURFACES)
    const size = await Size.findAll()
    if(!size.length) await Size.bulkCreate(SIZES)
    const facility = await Facility.findAll()
    if(!facility.length) await Facility.bulkCreate(FACILITIES)
    const city = await City.findAll()
    if(!city.length) await City.bulkCreate(CITIES)  
}

module.exports = {
    chargeDb
}