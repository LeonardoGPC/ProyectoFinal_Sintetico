const {User} = require("./db");
const LocalStrategy = require("passport-local");
const { getHash } = require('./hash');

async function authenticate(userName, password){
    try{
        var userFromDb = await User.findOne({
            where:{
                userName: userName,
            },
            plain: true
        });
    }catch(error){
        console.log(error);
    }
    if (userFromDb === null || userFromDb ===undefined) return null;
    var hashedPassword = getHash(password, userFromDb.salt);
    if (hashedPassword !== userFromDb.password) return null;
    return userFromDb;
};

module.exports = function (passport) {
    passport.use(
        new LocalStrategy(async function verify (username, password, done){
            try{
                const userFromDb = await authenticate(username, password);
                if (userFromDb === null) return done(null, false);
                return done(null, userFromDb);
            }catch(error){
                console.log("error");
                return done(error);
            }
        })
    );
    
    passport.serializeUser((user, cb) => {
        process.nextTick(function() {
            cb(null, {id: user.id, username: user.userName});
        });
    });
    passport.deserializeUser((user, cb) => {
        process.nextTick(function() {
            return cb(null, user);
        });
        }
    );
    
};