exports.checkImportContactStatus = async (client) => {
  try {
    const id = "ba93bfcd-f21f-4345-991a-3c49595ad576";

    const request = {
      url: `/v3/marketing/contacts/imports/${id}`,
      method: "GET",
    };
    const response = await client.request(request);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
