exports.sendEmail = async (client) => {
  try {
    const data = {
      contacts: [
        {
          email: "roorkee444@gmail.com",
        },
      ],
    };
    const request = {
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body: data,
    };
    const response = await client.request(request);
    console.log(response);
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
