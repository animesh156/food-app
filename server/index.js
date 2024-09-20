const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Food website");
});

app.listen(5000, () => {
  console.log(`app is listening at ${port}`);
});
