const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Booking', {
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hour: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isCancel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
   /*  FieldId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserId:{
      type: DataTypes.INTEGER,
      allowNull: false
    } */

  },{
    timestamps: false,
  }
)}
