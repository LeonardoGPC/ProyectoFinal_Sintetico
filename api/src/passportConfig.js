require('dotenv').config();
const { User } = require("./db");
const LocalStrategy = require("passport-local");
const { getHash } = require('./hash');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const {
    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
} = process.env;
const {url} = require('../utils.js')

async function authenticate(userName, password) {
    try {
        var userFromDb = await User.findOne({
            where: {
                userName: userName,
            },
            plain: true
        });
    } catch (error) {
        console.log(error);
    }
    if (userFromDb === null || userFromDb === undefined) return null;
    var hashedPassword = getHash(password, userFromDb.salt);
    //if (hashedPassword !== userFromDb.password) return null;
    return userFromDb;
};

async function findOrCreateUser(profile){
    var userData = {
        googleId: profile.id,
        userName: profile.displayName,
        name: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        image: profile.photos[0].value
    }
    const [user, created] = await User.findOrCreate({
        where: { googleId: profile.id },
        defaults: userData
    });
    return user;
}

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({
                usernameField: 'userName',
                passwordField: 'password'
            },
            async function verify(userName, password, done) {
                console.log("username and password: ");
                console.log(userName);
                console.log(password);
                try {
                    const userFromDb = await authenticate(userName, password);
                    if (userFromDb === null) return done(null, false);
                    console.log("userFromDb: ")
                    console.log(userFromDb);
                    return done(null, userFromDb);
                } catch (error) {
                    console.log(error);
                    return done(error);
                }
            })
    );

    passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: `${url}/users/google/callback`
        },
        async function(accessToken, refreshToken, profile, cb) {
            var user = await findOrCreateUser(profile)
            return cb(null, user);
        }
    ));

    passport.serializeUser((user, cb) => {
        process.nextTick(function () {
            cb(null, user);
        });
    });
    passport.deserializeUser((user, cb) => {
        process.nextTick(function () {
            return cb(null, user);
        });
    });

};