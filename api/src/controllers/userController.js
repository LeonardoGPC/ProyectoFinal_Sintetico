const axios = require('axios');
const { User } = require('../db');
const { Op } = require('sequelize');
const {getHash, getSalt} = require('../hash');

async function authenticate(userName, password){
    var userFromDb = await User.findOne({
        where:{
            userName: userName,
        },
        plain: true
    });
    if (userFromDb === null) throw new Error("User not found");
    var hashedPassword = getHash(password, userFromDb.salt);
    if (hashedPassword !== userFromDb.password) throw new Error("Invalid Password");
    return {id: userFromDb.id, userName: userFromDb.userName};
};

async function createUser(userData){
    const {id, name, lastName, email, phone, image, userName, password } = userData;
    const salt = getSalt();
    var hashedPassword = getHash(password, salt);
    const user = {id, name, lastName, companyName, cuit, clubName, email, phone, image,userName, password:hashedPassword, salt };
    try{
        await User.create(user);
        return "User created successfuly";
    }catch(error){
        throw new Error("Invalid Fields");
    }
}

async function getUser(userId){
    var userFromDb = User.findByPk(userId);
    if (userFromDb) return userFromDb;
    throw new Error("User not found");
}

module.exports = {
    authenticate,
    createUser
}