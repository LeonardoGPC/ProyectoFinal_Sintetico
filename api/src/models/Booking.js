const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Booking', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hour: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min:8,
          max: 23
          },
    },

    isCancel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    paymentStatus: {
      type: DataTypes.ENUM('IN_PROCESS', 'APPROVED', 'REJECTED'),
      allowNull:false,
      defaultValue: "IN_PROCESS",
    }
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
