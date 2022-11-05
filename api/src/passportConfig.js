const Club = require("./models/Club");
const localStrategy = require("passport-local").Strategy;
const { getHash } = require('./hash');

async function getClub(userName, password){
    var clubFromDb = await Club.findOne({
        where:{
            userName: userName,
        },
        plain: true
    });
    if (clubFromDb === null) return null;
    var hashedPassword = getHash(password, clubFromDb.salt);
    if (hashedPassword !== clubFromDb.password) return null;
    return clubFromDb;
};

module.exports = function (passport) {
    passport.use(
        new localStrategy(async (username, password, done) => {
            const clubFromDb = await getClub(username, password);
            if (clubFromDb) return done(null, clubFromDb);
            return done(null, false);
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser(async (id, cb) => {
        try {
            var club = await Club.findByPk(id);
            cb(null, club);
        }catch(error){
            cb(error);
        }
    });
};