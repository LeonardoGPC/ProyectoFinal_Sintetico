const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors')
const session = require("express-session");
const passport = require("passport");

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cors());
server.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
server.use(cookieParser("secretcode"));
server.use(passport.authenticate('session'));
//require("./passportConfig")(passport);
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, PATCH, GET, DELETE"
    )
    return res.status(200).json({})
  }
  next()
})

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
