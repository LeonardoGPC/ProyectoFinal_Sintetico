const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Surface', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  },{
    timestamps: false,
  }
)}


