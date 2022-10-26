const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Facility', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },{
    timestamps: false,
  }
)}


