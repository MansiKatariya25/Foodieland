const express = require("express");
const { handleCat } = require("../Controllers/categoryCont");

const router = express.Router()

router.get("/getCategory",handleCat)

module.exports = router

