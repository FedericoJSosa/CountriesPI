const {Activity}= require("../../db");

const getActivitiesController= async()=>{
    const allActivities= await Activity.findAll();
    return allActivities
};


module.exports= getActivitiesController;