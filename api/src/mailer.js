const nodemailer = require('nodemailer')
const {
    BOT_EMAIL, BOT_PASSWORD
  } = process.env;


  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: BOT_EMAIL,
      pass: BOT_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

module.exports = {
    transport,
}
  