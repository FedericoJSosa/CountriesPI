const { Activity, Country } = require("../../db");
const { Op } = require("sequelize");

//PODRIA CREARLE UNA VERIFICACION PARA VER SI TODOS LOS PAISES TIENEN UNA COINCIDENCIA CON ID, EN CASO DE QUE HAYA ALGUNO QUE NO LA TENGA, 
//MANDAR UN ERROR CON EL PAIS QUE NO SE ENCUENTRA EN LA DB COMO CODIGO DE ERROR PARA QUE EN EL FRONT PUEDA DECIR QUE PAIS ESTA MAL ESPECIFICAMENTE

const postActivitiesController = async ({ name, difficulty, duration, season, countries }) => {
    console.log(countries);
    const newActivity = await Activity.create({ name, difficulty, duration, season });
    const countriesArray = countries.split(",").map(a => a.trim());
    console.log(countriesArray);

    const countriesId = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: { [Op.any]: countriesArray } 
            }
        },
        attributes: ["id"]
    });


    await Promise.all(countriesId.map(countryId => newActivity.addCountry(countryId)));

    return newActivity;
};

module.exports = postActivitiesController;
