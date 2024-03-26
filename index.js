require("dotenv").config();

const client = require("@sendgrid/client");
const { sendEmail } = require("./create-update-contact");

client.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.SENDGRID_API_KEY);

sendEmail(client);
// checkImportContactStatus(client);
