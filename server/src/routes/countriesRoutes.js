const { Router } = require("express");
const {getAllHandler , getIdHandler , getNameHandler} = require("../handlers/countriesHandlers")

const countriesRoutes = Router()

countriesRoutes.get("/", getAllHandler);

countriesRoutes.get("/name", getNameHandler);

countriesRoutes.get("/:id", getIdHandler);


module.exports=countriesRoutes;