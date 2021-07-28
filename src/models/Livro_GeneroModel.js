//importando o banco de dados
const Sequelize = require('sequelize')//o const Sequelize é uma classe.
const db=require("../infra/db")
const Livro = require("./LivroModel")
const Genero = require("./generoModel")
//importando o banco de dados


const livro_genero = db.define('livro_genero', {}, { timestamps: false });
Livro.belongsToMany(Genero, { through: livro_genero });
Genero.belongsToMany(Livro, { through: livro_genero });

module.exports = livro_genero;
