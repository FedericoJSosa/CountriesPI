const { Router } = require("express");
const {postActivitiesHandler, getActivitiesHandler}= require("../handlers/activitiesHandlers");

const activitiesRoutes = Router()


activitiesRoutes.post("/", postActivitiesHandler);

activitiesRoutes.get("/", getActivitiesHandler);


module.exports=activitiesRoutes;