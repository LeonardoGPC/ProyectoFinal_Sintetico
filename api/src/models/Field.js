const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Field', {
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
    openHour:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        min:0,
        max: 23
      }
    },
    closeHour:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        min:0,
        max: 23,
        customValidator(value) {
          if (value <= this.openHour) {
            throw new Error("Close hour should be bigger than open hour");
          }
        }
      }
    },
    isDeleted: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    score:{
      type: DataTypes.FLOAT,
      allowNull:true,
    },
    /* email: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false 
    }, */
  },{
    timestamps: false,
  }
)}

