
const express = require("express");
const cors = require("cors");
const connectDb = require("./Models/conn");
const app = express();
app.use(cors());
const categoryRoute = require('./Routes/catroute') 
const recipeRoute = require('./Routes/reciperoute')
const authRoute = require('./Routes/auth')
connectDb()
app.use(express.json())


app.use('/',categoryRoute)
app.use('/',recipeRoute)
app.use('/auth',authRoute)


app.listen(8800, () => {
  console.log("running");
});
