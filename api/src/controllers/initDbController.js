const { Surface, Size, Facility, City, Field } = require('../db')
const { SURFACES } = require('../initData/surfaces')
const { SIZES } = require('../initData/sizes')
const { FACILITIES } = require('../initData/facilities')
const { CITIES } = require('../initData/cities')
const { FIELDS } = require('../initData/fields')



async function chargeDb(){
    const surface = await Surface.findAll()
    if(!surface.length) await Surface.bulkCreate(SURFACES)
    const size = await Size.findAll()
    if(!size.length) await Size.bulkCreate(SIZES)
    const facility = await Facility.findAll()
    if(!facility.length) await Facility.bulkCreate(FACILITIES)
    const city = await City.findAll()
    if(!city.length) await City.bulkCreate(CITIES)
    const fields = await Field.findAll()
    if(!fields.length) await Field.bulkCreate(FIELDS)
    
    const cancha1 = await Field.findByPk(1)
    await cancha1.addFacilities([1,2])
    const cancha2 = await Field.findByPk(2)
    await cancha2.addFacilities([2]) 
    const cancha3 = await Field.findByPk(3)
    await cancha3.addFacilities([1,2, 3]) 
}


module.exports = {
    chargeDb
}