const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Club', {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuit: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    clubName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },{
    timestamps: false,
  }
)}


