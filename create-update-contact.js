exports.sendEmail = async (client) => {
  try {
    const data = {
      contacts: [
        {
          email: "sid1@gmail.com",
        },
      ],
    };
    const request = {
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body: data,
    };
    const response = await client.request(request);
    const { statusCode = 0, body: { job_id = null } = {} } = response[0];
    console.log(job_id, "job_id");
    if (statusCode === 202 && job_id) {
      const getJobStatusInterval = setInterval(async () => {
        const statusResponse = await getJobStatus(client, job_id);
        const { statusCode = 0, body: { status = null } = {} } =
          statusResponse[0];
        if (statusCode === 200 && status !== "pending") {
          console.log(statusResponse[0], "Done");
          clearInterval(getJobStatusInterval);
          return true;
        }
        console.log(statusResponse[0], "pending");
        return true;
      }, 5000);
    }
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};

const getJobStatus = async (client, id) => {
  try {
    const request = {
      url: `/v3/marketing/contacts/imports/${id}`,
      method: "GET",
    };
    return await client.request(request);
  } catch (error) {
    console.error(error);
  }
};
