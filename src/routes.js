const express = require("express");

const CadasController = require("./controllers/CadasController");

const routes = express.Router();
routes.get("/", CadasController.show);
routes.post("/add", CadasController.store);

module.exports = routes;
