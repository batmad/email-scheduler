const cron = require("node-cron");

const { generateEmail, loadMailer, mailOptions } = require('./lib/utils.js');

const buildBodyEmail = (mail) => {
  try {
    mailOptions.to = 'DestinationEmail@gmail.com';
    mailOptions.subject = 'Schedule sending Email using Node.js';
    mailOptions.text = mail;

    return mailOptions;
  } catch (error) {
    return false;
  }
};

async function sendEmail() {
  try {
    const mail = await generateEmail();
    const composeMail = await buildBodyEmail(mail);
    const logsMail = await loadMailer(composeMail);

    console.log(logsMail);
  } catch (e) {
    console.log(e);
  }
}

// Scheduling send email on Monday to Friday 12:35
cron.schedule("35 12 * * Monday,Tuesday,Wednesday,Thursday,Friday", () => {
  sendEmail();
});
