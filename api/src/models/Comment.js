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
    score: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};