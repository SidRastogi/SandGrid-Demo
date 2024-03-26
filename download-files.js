const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Function to download JSON file
exports.downloadJSONFile = async function (url, name = "contects.json") {
  filePath = path.join(__dirname + "/files", name);
  try {
    const response = await axios({
      method: "get",
      url: url,
      responseType: "stream",
    });

    // Pipe the response data into a writable stream
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    // Return a promise to indicate completion
    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    throw new Error("Error downloading JSON file: " + error.message);
  }
};
