const {Country}= require("../../db");
const {Op}= require("sequelize");

const getNameCountries= async(nameQuery)=>{
    const dbName= await Country.findAll({
        where: {
            name: {[Op.iLike]: `%${nameQuery}%`}
        }
    })

    if (dbName && dbName.length!=0){
        return dbName
    }else{
        throw new Error("No se encontraron países con ese nombre.")
    }
};

module.exports= getNameCountries;