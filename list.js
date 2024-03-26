exports.createList = (client, data = { name: "26-032024" }) => {
  const request = {
    url: `/v3/marketing/lists`,
    method: "POST",
    body: data,
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

exports.getList = (client) => {
  const request = {
    url: `/v3/marketing/lists`,
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

exports.getContectByListId = (client) => {
  const list_id = "c9d9f594-0d1e-4bfc-8557-efc8f9e0abfe";
  const queryParams = {
    list_id: "c9d9f594-0d1e-4bfc-8557-efc8f9e0abfe",
  };

  const request = {
    url: `/v3/contactdb/lists/${list_id}/recipients`,
    method: "GET",
    qs: queryParams,
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
