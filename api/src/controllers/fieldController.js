const axios = require("axios");
const { Field, Facility, Surface, Size, City, Comment, User, Booking } = require("../db");
const { Op } = require("sequelize");

const queryParams = {
  attributes: ["id", "name"],
  through: {
    attributes: [],
  },
};

const queryParams2 = {
  attributes: ["name"],
};

const queryParams4 ={
  attributes: ["id"],
  through: {
    attributes: [],
  },
}

async function getFields() {
  let fields = await Field.findAll({
    where: {
      // state: {
      //   [Op.eq]: "APPROVED",
      // },
    },
    include: [
      {
        model: Size,
        ...queryParams2,
      },
      {
        model: Surface,
        ...queryParams2,
      },
      {
        model: City,
        ...queryParams2,
      },
      {
        model: Facility,
        ...queryParams,
      },
      {
        model: Booking,
        ...queryParams4,
      },
      {
        model: User,
        attributes: ["planType"],
      }
      
    ],
  });
  if (fields.length) return fields;
  else throw new Error("there is no data in db");
}

async function getFieldById(id) {
  const field = await Field.findByPk(id, {
    where: {
      state: {
        [Op.eq]: "APPROVED",
      },
    },
    include: [
      {
        model: Size,
        ...queryParams2,
      },
      {
        model: Surface,
        ...queryParams2,
      },
      {
        model: City,
        ...queryParams2,
      },
      {
        model: Facility,
        ...queryParams,
      },
      {
        model: User,
        attributes: ["planType"],
      }
      
    ],
  });
  if (field) return field;
  else throw new Error("Field does not exist in db");
}

async function createField(fieldData, OwnerId) {
 
  const {
    id,
    name,
    image,
    state,
    price,
    address,
    openHour,
    closeHour,
    facilities,
    size,
    surface,
    city,
    description,
  } = fieldData;
  const field = {
    id,
    name,
    image,
    state,
    price,
    address,
    openHour,
    closeHour,
    description,
    state: "PENDING",
  };
  try {
    const newField = await Field.create(field);
    await newField.setSize(size);
    await newField.setSurface(surface);
    await newField.setCity(city);
    await newField.setUser(OwnerId)
    if (facilities) {
      await newField.addFacilities(facilities);
    }
    return "Field created successfully";
  } catch (error) {
    console.log(error);
    throw new Error("Invalid Fields");
  }
}

async function deleteField(fieldId) {
  try {
    var fieldFromDb = await Field.findByPk(fieldId);
    await fieldFromDb.destroy();
  } catch (error) {
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