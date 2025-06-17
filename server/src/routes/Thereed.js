const express = require("express");
const routerThereed = express.Router();
const { getHasil } = require("../controllers/Threed.js");

routerThereed.get("/getthreed", getHasil);

module.exports = routerThereed;
