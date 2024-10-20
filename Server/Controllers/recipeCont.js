const rec = require("../Models/Recipe")

module.exports.handleRecipe = async (req,res)=> {
    const recipe = await rec.find() 
    if(recipe.length>0){
        res.status(200).send(recipe)
    }
    else{
        res.status(404).send("Not found")
    }
    res.send()   
}