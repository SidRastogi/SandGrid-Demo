const { downloadJSONFile } = require("./download-files");

exports.getContacts = (client) => {
  const request = {
    url: `/v3/marketing/contacts`,
    method: "get",
  };
  return client
    .request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(response.body);
    })
    .catch((error) => {
      console.error(error);
    });
};

exports.getExportContacts = (client) => {
  const request = {
    url: `/v3/marketing/contacts/exports`,
    method: "POST",
    body: {
      file_type: "json",
    },
  };
  return client
    .request(request)
    .then(async ([response]) => {
      console.log(response);
      const { statusCode = 0, body: { id = null } = {} } = response;
      if (statusCode === 202 && id) {
        const getJobStatusInterval = setInterval(async () => {
          const statusResponse = await getExportStatus(client, id);
          const { statusCode = 0, body: { status = null } = {} } =
            statusResponse[0];
          if (statusCode === 200 && status !== "pending") {
            console.log(statusResponse[0], "Done");
            clearInterval(getJobStatusInterval);
            await downloadJSONFile(statusResponse[0].body.urls[0]);
            return true;
          }
          console.log(statusResponse[0], "pending");
          return true;
        }, 5000);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const getExportStatus = async (client, id) => {
  const request = {
    url: `/v3/marketing/contacts/exports/${id}`,
    method: "get",
  };
  return await client.request(request);
};
