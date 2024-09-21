const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
const cors = require('cors')
const foodItem = require('./routes/foodItem')
const connectDB = require('./config/db')

connectDB()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/menu",foodItem)

app.listen(5000, () => {
  console.log(`app is listening at ${port}`);
});
