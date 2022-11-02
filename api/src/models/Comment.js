const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
      },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE, //VER
      allowNull: false,
    },
    hour: {
      type: DataTypes.TIME, //VER
      allowNull: false,
    }
    
  },{
    timestamps: false,
  }
)};