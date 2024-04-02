var express = require("express");
var app = express();
const port = process.env.LISTEN_PORT || 3000;
const hostname = "localhost"

app.get("/healthcheck", (req, res, next) => {
  res.send("OK");
});

app.get("/", (req, res, next) => {
  res.send("It works!");
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});