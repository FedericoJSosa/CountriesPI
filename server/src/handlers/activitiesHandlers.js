const postActivitiesController= require("../controllers/activitiesControllers/postActivitiesController");
const getActivitiesController= require("../controllers/activitiesControllers/getActivitiesController");


const postActivitiesHandler=async(req , res)=>{
    try {
        const {name, difficulty, duration, season}= req.body;
        const newData= {name, difficulty, duration, season};
        const data= await postActivitiesController(newData);
        res.status(200).json({message: "Salio todo bien", data});    
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

const getActivitiesHandler=async(req , res)=>{
    try {
        const data= await getActivitiesController();
        res.status(200).json({data: data});    
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

module.exports={
    postActivitiesHandler,
    getActivitiesHandler
};