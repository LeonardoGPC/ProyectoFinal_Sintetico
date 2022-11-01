const axios = require('axios');
const {field, Club} = require('../db');
const { Op } = require('sequelize');

async function login(userName, password){
    var clubFromDb = await Club.findOne({
        where:{
            name: userName,
            password: password
        }
    });
    if (clubFromDb === null) return false;
    return true;
};

async function createClub(clubData){
    const {id, companyName, cuit, clubName, email, phone, image,userName, password } = clubData;
    const club = {id, companyName, cuit, clubName, email, phone, image,userName, password };
    try{
        await Club.create(club);
        return "Club created successfuly";
    }catch(error){
        throw new Error("Invalid Fields");
    }
}

