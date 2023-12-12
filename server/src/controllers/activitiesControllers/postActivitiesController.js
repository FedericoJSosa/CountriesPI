const {Activity}= require("../../db")

const postActivitiesController=async({name, difficulty, duration, season, countries})=>{
    const newActivity= await Activity.create({name, difficulty, duration, season})
    
    //FUNCIONA PERO TENGO QUE TENER EN CUENTA DE QUE ME VAN A PASAR EL NOMBRE DEL PAIS, NO SU ID
    //TENDRIA QUE HACER QUE SEGUN EL NOMBRE ME IDENTIFIQUE EL ID Y QUE SEA ESO LO QUE TERMINE PASANDO EN ADD
    
    newActivity.addCountries(countries);
    
    
    return newActivity
};


module.exports= postActivitiesController;