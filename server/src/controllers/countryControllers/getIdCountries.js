const {Country, Activity}= require("../../db");
const {Op}= require("sequelize");



const getIdCountries= async(paramId)=>{
    console.log(paramId);
    const dbId= await Country.findOne({
        where:{
            id: {[Op.iLike]: `%${paramId}%`}
        },
        include: {
            model: Activity,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    });

    if (!dbId) {
        throw new Error("No se encontró ningún país con ese ID.");
    }

    return dbId;
};


module.exports=getIdCountries;