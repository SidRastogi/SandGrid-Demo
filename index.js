require('dotenv').config();

const client = require('@sendgrid/client');
const { sendEmail } = require('./create-update-contact');
const { checkImportContactStatus } = require('./check-import-contact-status');

client.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.SENDGRID_API_KEY);

// sendEmail(client);
checkImportContactStatus(client);