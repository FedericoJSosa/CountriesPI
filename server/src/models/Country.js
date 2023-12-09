const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Country = sequelize.define('Country', {
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
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
    { timestamps: false });

    Country.beforeCreate(async (country) => {
      const generateDefaultCode = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
        let serial = '';
    
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * alphabet.length);
          serial += alphabet.charAt(randomIndex);
        }
    
        return serial;
      };
    
      country.id = await generateDefaultCode();
    });

};


