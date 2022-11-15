require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

process.env.NODE_ENV === 'development'?
config = require("./config/config.js")['development']:
config = require("./config/config.js")['production']

const sequelize = new Sequelize(config.url, config);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Field, Facility, Size, Surface, City, Comment, User, Booking} = sequelize.models;

Field.belongsToMany(Facility, {through: 'fieldFacility'});
Facility.belongsToMany(Field, {through: 'fieldFacility'});

City.hasMany(Field);
Field.belongsTo(City);

Size.hasMany(Field);
Field.belongsTo(Size);

Surface.hasMany(Field);
Field.belongsTo(Surface);

User.hasMany(Field, {foreignKey: "OwnerId"})
Field.belongsTo(User, {foreignKey: "OwnerId"})

Field.belongsToMany(Booking, { through: 'field_booking' });
Booking.belongsToMany(Field, { through: 'field_booking' });

User.hasMany(Booking)
Booking.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Field.hasOne(Comment);
Comment.belongsTo(Field);

// Comment.belongsTo(Booking);
// Booking.hasOne(Comment);

// Comment.hasMany(Field)
// Field.belongsTo(Comment)


// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Op,
  Sequelize
};