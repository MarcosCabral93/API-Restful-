//importando o banco de dados
const Sequelize=require('sequelize')//o const Sequelize é uma classe.
const db=require("../infra/db")
const Livro = require("./LivrosModel")



//criando a tabela livro
const Genero=db.define("Genero",{//const Livro é a Tabela, db.Livraria é a instancia do banco . define é o metodo do Sequelize para definir a tabela
    
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    }})

module.exports=Genero;