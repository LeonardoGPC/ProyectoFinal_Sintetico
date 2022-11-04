const { getHash, getSalt } = require("../hash")

var user1 = { name:"juan", lastName:"carlos", userName:"juan-carlos", email:"juancarlo@gmail.com", phone:"123123", password:"123123"};
var user2 = { name:"agus", lastName:"asd", userName:"agus-asd", email:"juancarlo@gmail.com", phone:"123123", password:"123123"};
var user3 = { name:"julian", lastName:"carlasdaos", userName:"julian-carlasdaos", email:"juancarlo@gmail.com", phone:"123123", password:"123123"};

function addHash(user) {
    var salt = getSalt();
    var hashedPassword = getHash(user.password, salt);
    user.password = hashedPassword;
    user.salt = salt;
    return user;
}

module.exports = {
    USERS : [
        addHash(user1),
        addHash(user2),
        addHash(user3)
    ]
}