const {Activity, Country}= require("../../db");
const {Op}= require("sequelize");


const postActivitiesController=async({name, difficulty, duration, season, countries})=>{
    const newActivity= await Activity.create({name, difficulty, duration, season})

    const countriesId= await Country.findAll({
        where:{
            name: {[Op.iLike]: countries}
        },
        attributes:["id"]
    })


    newActivity.addCountries(countriesId);
    
    
    return newActivity
};


module.exports= postActivitiesController;