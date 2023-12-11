const getAllCountries= require("../controllers/countryControllers/getAllCountries");
const getNameCountries= require("../controllers/countryControllers/getNameCountries");
const getIdCountries= require("../controllers/countryControllers/getIdCountries");

const getAllHandler= async(req , res)=>{
    try {
        const data= await getAllCountries();
        res.status(200).json({data: data});    
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    
}

const getNameHandler= async(req , res)=>{
    try {
        const nameQuery= req.query.name
        const data= await getNameCountries(nameQuery);
        res.status(200).json({data: data});    
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

const getIdHandler= async(req , res)=>{
    try { 
        const paramId= req.params.id;
        const data= await getIdCountries(paramId);
        res.status(200).json({data: data});    
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

module.exports={
getAllHandler,
getNameHandler,
getIdHandler
};