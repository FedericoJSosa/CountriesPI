const axios = require("axios");
const server = require("./src/server");
const unidecode= require("unidecode")
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  try {

    const response= await axios.get("http://localhost:5000/countries");
    const data= response.data;

    await Promise.all(
      data.map(async (country)=>{
        const countryDb={
          name: unidecode(country.name.official),
          img: country.flags.png,
          continent: Array.isArray(country.continents)? country.continents.join(", ") : country.continents,
          capital: country.capital? (Array.isArray(country.capital)? country.capital.join(", ") : country.capital) : "Not Found",
          subregion: country.subregion,
          area: country.area,
          population: country.population
        };

        await conn.models.Country.create(countryDb);
      })
    )


  } catch (error) {
    console.error('Error al obtener datos de la API', error);
  }
})
}).catch(error => console.error(error))


