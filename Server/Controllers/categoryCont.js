const cat = require("../Models/Category")

module.exports.handleCat = async (req,res)=>{
 const category = await cat.find()
 if(category.length>0){
    res.status(200).send(category)
 }
 else{
    res.status(404).send("Not found")
 }
  
}