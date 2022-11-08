require('dotenv').config();
const { User } = require("./db");
const LocalStrategy = require("passport-local");
const { getHash } = require('./hash');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const {
    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
} = process.env;

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
    if (hashedPassword !== userFromDb.password) return null;
    return userFromDb;
};

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({
                usernameField: 'userName',
                passwordField: 'password'
            },
            async function verify(userName, password, done) {
                try {
                    const userFromDb = await authenticate(userName, password);
                    if (userFromDb === null) return done(null, false);
                    return done(null, userFromDb);
                } catch (error) {
                    console.log("error");
                    return done(error);
                }
            })
    );

    passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3001/users/google/callback"
        },
        async function(accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
            var user = {
                googleId: profile.id,
                userName: profile.displayName,
                name: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            }
            var user = await User.findOrCreate(user);
            return cb(null, user);
            /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return cb(err, user);
            }); */
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