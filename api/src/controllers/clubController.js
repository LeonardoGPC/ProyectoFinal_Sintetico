const axios = require('axios');
const { Club } = require('../db');
const { Op } = require('sequelize');
const crypto = require('crypto');

function getSalt(){
    return crypto.randomBytes(16).toString('hex');
}

function getHash(password, salt){
    const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
    return hash;
}

async function authenticate(userName, password){
    var clubFromDb = await Club.findOne({
        where:{
            userName: userName,
        },
        plain: true
    });
    if (clubFromDb === null) throw new Error("User not found");
    var hashedPassword = getHash(password, clubFromDb.salt);
    if (hashedPassword !== clubFromDb.password) throw new Error("Invalid Password");
    return {id: clubFromDb.id, userName: clubFromDb.userName};
};



async function createClub(clubData){
    const {id, companyName, cuit, clubName, email, phone, image,userName, password } = clubData;
    const salt = getSalt();
    var hashedPassword = getHash(password, salt);
    const club = {id, companyName, cuit, clubName, email, phone, image,userName, password:hashedPassword, salt };
    try{
        await Club.create(club);
        return "Club created successfuly";
    }catch(error){
        throw new Error("Invalid Fields");
    }
}

module.exports = {
    authenticate,
    createClub
}