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

module.exports = {
    getSalt,
    getHash
}