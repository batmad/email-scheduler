# Scheduling Email
Scheduling send email using nodejs

# Installation
1. Install package NPM
```
// with npm
npm install fs
npm install node-cron
npm install time-stamp
npm install nodemailer
npm install nodemailer-smtp-transport
npm install dotenv
```
2. If using SMTP gmail, follow this intruction from that link:
   https://www.rumahweb.com/journal/cara-mengaktifkan-application-password-gmail/
4. Create your credetials configuration SMTP in dotenv.
```
// example
CONF_MAIL_SERVICE="gmail"
CONF_MAIL_HOST="smtp.gmail.com"
CONF_MAIL_AUTH_USER="yourmail@gmail.com"
CONF_MAIL_AUTH_PASS="password***"
```

# How to Use
```
node index.js
```
