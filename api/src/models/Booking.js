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
        allowNull: false
    },
    isCancel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    paymentStatus: {
      type: DataTypes.ENUM('ENABLED', 'IN_PROCESS', 'APPROVED', 'REJECTED'),
      allowNull:false,
      defaultValue: "ENABLED"
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
