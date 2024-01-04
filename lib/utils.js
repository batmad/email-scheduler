const fs = require('fs');
const timestamp = require("time-stamp");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

require('dotenv').config()

let mailOptions = {
  from: process.env.CONF_MAIL_AUTH_USER,
};

function generateEmail() {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync('assets/email.txt', 'utf8');
      resolve(data.toString());
      return;
    } catch (e) {
      reject('Error : ' + e);
    }
  });
}

let transporter = nodemailer.createTransport(smtpTransport({
  service: process.env.CONF_MAIL_SERVICE,
  host: process.env.CONF_MAIL_HOST,
  auth: {
    user: process.env.CONF_MAIL_AUTH_USER,
    pass: process.env.CONF_MAIL_AUTH_PASS
  }
}));

function loadMailer(bool) {
  return new Promise((resolve, reject) => {
    if (bool) {
      try {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            resolve(error);
          } else {
            resolve('Email sent at : ' + timestamp("YYYY/MM/DD HH:mm:ss") + '. Response : ' + info.response);
          }
        });
      } catch (e) {
        resolve('Error : ' + e.message);
      }
      return;
    }

    reject('Send email failed!');
  });
}

module.exports = { generateEmail, loadMailer, mailOptions }
