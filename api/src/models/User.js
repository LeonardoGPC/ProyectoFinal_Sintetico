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
        allowNull:true,
        defaultValue: 'https://res.cloudinary.com/deirkmhyd/image/upload/v1668551430/sintetico/jx4co8voyonxdxusng4w.jpg'
        //default value iconito
    },
    password: {
        type: DataTypes.STRING,
        allowNull:true
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('user', 'club', 'admin'),
        defaultValue: 'user'
    },
    planType: {
        type: DataTypes.ENUM('none', 'basico', 'club', "premium"),
        defaultValue: 'none'
    }
    
  },{
    timestamps: false,
  }
)}
