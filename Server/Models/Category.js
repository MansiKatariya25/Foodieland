const mongoose = require("mongoose");

const category = new mongoose.Schema({
    image:String,
    name:String,
    color:String,
})

const cat = mongoose.model("Category",category)

module.exports = cat 