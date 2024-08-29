# Email Scheduler

A Node.js application to automate email scheduling and sending using `node-cron` and `nodemailer`. This project allows you to schedule email delivery at specific times and automate the process using SMTP services such as Gmail.

## Features

- **Automated Scheduling:** Easily schedule emails to be sent at regular intervals (e.g., every weekday at 12:35 PM).
- **SMTP Support:** Supports multiple SMTP services, including Gmail.
- **Configuration with `.env` files:** Store credentials securely using environment variables.
- **Lightweight & Flexible:** Built with simplicity and flexibility in mind.

## Installation

Follow these steps to set up and run the project:

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/email-scheduler.git
cd email-scheduler
```

### 2. Install the necessary NPM packages:
```bash
npm install
```

### 3. Set up your SMTP credentials:
Create a `.env` file in the project root directory and add your SMTP configuration.

Example:
```plaintext
CONF_MAIL_SERVICE=gmail
CONF_MAIL_HOST=smtp.gmail.com
CONF_MAIL_AUTH_USER=yourmail@gmail.com
CONF_MAIL_AUTH_PASS=yourpassword
```

> **Note:** If using Gmail, ensure you have enabled "App Passwords" for your Gmail account. You can follow the guide [here](https://www.rumahweb.com/journal/cara-mengaktifkan-application-password-gmail/).

### 4. Start the email scheduler:
```bash
node index.js
```

## Usage

Once the server is running, the email scheduler will automatically send emails based on the predefined schedule. The default schedule in the script sends an email every weekday (Monday to Friday) at 12:35 PM.

### Example Schedule Configuration:

```javascript
cron.schedule("35 12 * * 1-5", () => {
  sendEmail();
});
```

This configuration ensures that the emails are sent every weekday at 12:35 PM.

## Contributing

Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
