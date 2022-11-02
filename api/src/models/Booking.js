const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
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

  },{
    timestamps: false,
  }
)}
