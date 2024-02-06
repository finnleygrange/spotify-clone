const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const clientId = "c1be18ff1a82495783d9cfefdd503533";
const clientSecret = "9f33969bfc274ec6bc19c1ac5c2d7a91";

const authOptions = {
  url: "https://accounts.spotify.com/api/token",
  method: "post",
  headers: {
    Authorization: `Basic ${Buffer.from(clientId + ":" + clientSecret).toString(
      "base64"
    )}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    grant_type: "client_credentials",
  },
};

axios(authOptions).then((res) => {
  console.log(res.data.access_token);
});

app.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
