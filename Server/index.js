
const express = require("express");
const cors = require("cors");
const connectDb = require("./Models/conn");
const app = express();
app.use(cors());
const categoryRoute = require('./Routes/catroute') 
const recipeRoute = require('./Routes/reciperoute')
connectDb()

app.use('/',categoryRoute)
app.use('/',recipeRoute)


app.listen(8800, () => {
  console.log("running");
});
