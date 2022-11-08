const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('User', {
    googleId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    userName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:true
    },
    image: {
        type: DataTypes.STRING,
        allowNull:true
        //default value iconito
    },
    password: {
        type: DataTypes.STRING,
        allowNull:true
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: true
    }
    
  },{
    timestamps: false,
  }
)}
