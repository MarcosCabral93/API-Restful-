//importando o banco de dados
const Sequelize=require('sequelize')//o const Sequelize é uma classe.
const db=require("../infra/db")




//criando a tabela livro
const Genero=db.define("genero",{//const genero é a Tabela, db.Livraria é a instancia do banco . define é o metodo do Sequelize para definir a tabela
    
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    }})

module.exports=Genero;