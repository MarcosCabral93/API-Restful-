//importando o banco de dados
const Sequelize = require('sequelize')//o const Sequelize é uma classe.
const db=require("../infra/db")
const Livro = require("./LivrosModel")
const Genero = require("./generoModel")
//importando o banco de dados


const Livro_Genero = db.define('Livro_Genero', {}, { timestamps: false });
Livro.belongsToMany(Genero, { through: Livro_Genero });
Genero.belongsToMany(Livro, { through: Livro_Genero });

module.exports = Livro_Genero;
