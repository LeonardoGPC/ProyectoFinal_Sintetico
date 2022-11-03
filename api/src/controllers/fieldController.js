const axios = require("axios");
const { Field, Facility, Surface, Size, City, Comment, Booking } = require("../db");
const { Op } = require("sequelize");

const queryParams = {
  attributes: ["id", "name"],
  through: {
    attributes: [],
  },
};

const queryParams3 = {
  attributes: ["id", "comment", "score"],
  through: {
    attributes: [],
  },
};

const queryParams2 = {
  attributes: ["name"],
};

const queryParams4 ={
  attributes: ["date", "hour", "isCancel"],
  through: {
    attributes: [],
  },
}

async function getFields() {
  let fields = await Field.findAll({
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
        model: Comment,
        ...queryParams3,
      },
      {
        model: Booking,
        ...queryParams4
      },
    ],
  });
  if (fields.length) return fields;
  else throw new Error("there is no data in db");
}

<<<<<<< HEAD
async function getFieldById(id){
    const field = await Field.findByPk(id, {
        where: {
            state: {
                [Op.eq]: "APPROVED"
            }
        },
        attributes: [Sequelize.fn('AVG', Sequelize.col('Comment.score')), 'rating'],
        include:[
            {
                model: Comment,
                attributes: []
            },
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
=======
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
        model: Comment,
        ...queryParams3,
      },
      {
        model: Booking,
        ...queryParams4
      },
    ],
  });
  if (field) return field;
  else throw new Error("Field does not exist in db");
>>>>>>> 24920cc951ae3f27f38c17f0083ead0b3cfc16ce
}

async function createField(fieldData) {
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
    state: "APPROVED",
  };
  try {
    const newField = await Field.create(field);
    await newField.setSize(size);
    await newField.setSurface(surface);
    await newField.setCity(city);
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
module.exports = {
  getFields,
  getFieldById,
  createField,
  deleteField,
};
