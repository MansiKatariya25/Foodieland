const express = require("express");
const { handleRecipe } = require("./Controllers/recipeCont");
const router = express.Router()

router.get("/getRecipe",handleRecipe)

module.exports = router