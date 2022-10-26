const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Field', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state:{
      type: DataTypes.ENUM('PENDING', 'APPROVED', 'DISAPPROVED'),
      allowNull:false,
      defaultValue: "PENDING",        
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    address:{
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longitude:{
      type: DataTypes.STRING,
      allowNull: true
    },
  },{
    timestamps: false,
  }
)}


