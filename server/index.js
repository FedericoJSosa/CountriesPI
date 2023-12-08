const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  try {
    const response= await axios.get("http://localhost:5000/countries");
    const data= response.data;

    await Promise.all(
      data.map(async (pais)=>{
        const paisDb={
          name: pais.name,
          img: pais.flag.png,
          continent: pais.continents,
          capital: pais.capital,
          subregion: pais.subregion,
          area: pais.area,
          population: pais.population
        }
      })
    )


  } catch (error) {
    
  }
})
}).catch(error => console.error(error))


