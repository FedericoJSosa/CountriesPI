const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
 module.exports= (sequelize) => {
  // defino el modelo
  const Country= sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.INTEGER,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {timestamps:false});

  Country.beforeCreate((country) => {
    const generateDefaultCode = () => {
      const firstLetterName =  country.name.charAt(0).toUpperCase();
      const firstLetterContinent = country.continent.charAt(0).toUpperCase();
      const firstLetterCapital = country.capital.charAt(0).toUpperCase();
      return `${firstLetterName}${firstLetterContinent}${firstLetterCapital}`;
    };
  
    country.id = generateDefaultCode();
  });

};


