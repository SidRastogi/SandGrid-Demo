require("dotenv").config();

const client = require("@sendgrid/client");
const { sendEmail } = require("./create-update-contact");
const { createList, getList, getContectByListId } = require("./list");
const { getContacts, getExportContacts } = require("./contacts");
const { downloadFile } = require("./download-files");

client.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.SENDGRID_API_KEY);

// sendEmail(client);
// checkImportContactStatus(client);

// createList(client);
// getList(client);
// getContectByListId(client);
// getContacts(client);
getExportContacts(client);
