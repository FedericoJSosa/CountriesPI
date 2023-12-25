const {Country, Activity}=require("../../db");

const getAllCountries=async()=>{
    const request=await Country.findAll(
         {include: {
            model: Activity,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }} 
    );
    return request
};

module.exports= getAllCountries;



 

