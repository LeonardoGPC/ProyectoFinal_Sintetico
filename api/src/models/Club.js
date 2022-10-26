const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Club', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
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
    }
  },{
    timestamps: false,
  }
)}


