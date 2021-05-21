const { Model, DataTypes }= require('sequelize');

const connection = require('../database');

class Anuncio extends Model {}

Anuncio.init(
  {
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
  },
  {
    sequelize: connection
  }
)

module.exports = Anuncio;
