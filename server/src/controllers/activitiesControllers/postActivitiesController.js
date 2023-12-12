const {Activity}= require("../../db")

const postActivitiesController=async(newData)=>{
    const newActivity= await Activity.create(newData)
    return newActivity
};


module.exports= postActivitiesController;