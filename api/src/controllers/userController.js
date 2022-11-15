const axios = require('axios');
const { User } = require('../db');
const { Op } = require('sequelize');
const {getHash, getSalt} = require('../hash');
const { sendRegistrationEmail } = require("./mailController")

async function createGoogleUser(userData){
    try{
        const [user, created] = await User.findOrCreate({
            where: userData,
        });
        console.log(user);
        return user;
        
    }catch(error){
        throw new Error("error");
    }
}
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
    const {name, lastName, email, phone, image, userName, password } = userData;
    const salt = getSalt();
    var hashedPassword = getHash(password, salt);
    const user = {name, lastName, email, phone, image,userName, password: hashedPassword, salt };
    try{
        await User.create(user);
        sendRegistrationEmail(name, lastName, userName,  email)
        return "User created successfuly";
    }catch(error){
        throw new Error("Invalid Fields");
    }
}

async function getUser(userId){
    console.log(userId);
    var userFromDb = await User.findByPk(userId);
    if (userFromDb) return userFromDb;
    throw new Error("User not found");
}

async function getUsers(){
    var usersFromDb = await User.findAll();
    if (usersFromDb) return usersFromDb;
    throw new Error("There is not users in the db");
}

async function editUser(userId, data){
    
    try{
        var userFromDb= await User.findByPk(userId);
        await userFromDb.update(data);
        await userFromDb.save();
    }catch(error){
        throw new Error("El elemento a editar no existe o los parámetros no son válidos");
    }
}

async function editUserPlanType(userId, data){
    
    try{
        var userFromDb= await User.findByPk(userId);
        await userFromDb.update(data);
        await userFromDb.save();
    }catch(error){
        
        throw new Error("El elemento a editar no existe o los parámetros no son válidos");
    }
}
async function deleteAccount(userId) {
    try{
        var userFromDb = await User.findByPk(userId)
        await userFromDb.destroy()
    }catch(error) {
        throw new Error("El elemento a borrar no existe");
    }
}



module.exports = {
    authenticate,
    createUser,
    getUser,
    getUsers,
    createGoogleUser,
    editUser,
    editUserPlanType,
    deleteAccount
}