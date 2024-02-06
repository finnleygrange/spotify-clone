const express = require("express");
const app = express();
const port = 3000;

const clientId = "c1be18ff1a82495783d9cfefdd503533";
const clientSecret = "9f33969bfc274ec6bc19c1ac5c2d7a91";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
