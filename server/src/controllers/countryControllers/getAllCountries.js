const {Country}=require("../../db");

const getAllCountries=async()=>{
    const request=await Country.findAll();
    return request
};

module.exports= getAllCountries;



 

