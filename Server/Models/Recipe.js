 

const mongoose = require("mongoose");

const recipe = new mongoose.Schema({
    image:String,
    title:String,
    time:String,
    name:String,
    nutrition:[{Calories: Number,
        TotalFat: Number,
        Protein:Number,
        Carbohydrate: Number,
        Cholesterol: Number,}],
    maindish:[String],
    sauce:[String],
    direction:[{
        title:String,
        direction:String,
    }],
})

const rec = mongoose.model("Recipe",recipe)

module.exports = rec