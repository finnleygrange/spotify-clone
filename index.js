const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const clientId = "c1be18ff1a82495783d9cfefdd503533";
const clientSecret = "9f33969bfc274ec6bc19c1ac5c2d7a91";

let access_token;

const authOptions = {
  url: "https://accounts.spotify.com/api/token",
  method: "post",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    grant_type: "client_credentials",
  },
  json: true,
};

const artistsId = "5Mhs3Eu8lU6sRCtRYsmABV";

const artistOptions = {
  url: `https://api.spotify.com/v1/artists/${artistsId}`,
  method: "get",
  headers: {
    Authorization: "",
  },
};

axios(authOptions)
  .then((res) => {
    access_token = res.data.access_token;
    artistOptions.headers.Authorization = `Bearer ${access_token}`;
    return axios(artistOptions);
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
