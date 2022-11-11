const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('User', {
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
        allowNull:false
    },
    image: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue: 'https://imgs.search.brave.com/LKZaQJ8CXmrdQfwcqrq-UEuEu7Z62flCZgSujQmCc2M/rs:fit:236:236:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vMjM2/eC8xNS9iZi9iOS8x/NWJmYjkxMzVmZDhl/YWUyNGY0NzAyMDky/NmEyNzdjYy5qcGc'
        //default value iconito
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
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
