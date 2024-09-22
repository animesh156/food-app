const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
const cors = require('cors')
const foodItem = require('./routes/foodItem')
const cartRoute =  require('./routes/cartRoute')
const connectDB = require('./config/db')
const userRoute = require('./routes/userRoute')
const {protect} = require('./middleware/authMiddleware')


connectDB()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/menu',protect,foodItem)
app.use('/user',userRoute)
app.use('/cart',protect,cartRoute)

app.listen(5000, () => {
  console.log(`app is listening at ${port}`);
});
