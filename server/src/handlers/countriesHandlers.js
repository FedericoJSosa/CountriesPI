const getAllHandler=(req , res)=>{
    try {
        res.status(200).send("Aca estamos en getAllHandler");    
    } catch (error) {
        res.status(400).send("Todo mal en getAllHandler");
    }
    
}

const getNameHandler=(req , res)=>{
    try {
        res.status(200).send("Aca estamos en getNameHandler");    
    } catch (error) {
        res.status(400).send("Todo mal en getNameHandler");
    }
    
}

const getIdHandler=(req , res)=>{
    try {
        res.status(200).send("Aca estamos en getIdHandler");    
    } catch (error) {
        res.status(400).send("Todo mal en getIdHandler");
    }
    
}

module.exports={
getAllHandler,
getNameHandler,
getIdHandler
};