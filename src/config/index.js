require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    email: process.env.EMAIL,
    applicationPassword: process.env.APPLICATION_PASSWORD,
    host: process.env.HOST,
    gmailPort: process.env.GMAIL_PORT,
    ownerEmail1: process.env.OWNER_EMAIL_1,
    ownerEmail2: process.env.OWNER_EMAIL_2,
};

