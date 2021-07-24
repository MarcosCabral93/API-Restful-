//importando o banco de dados
const Sequelize=require('sequelize')//o const Sequelize é uma classe.
const db=require("../infra/db")
//criando a tabela livro
const Livro=db.define("livro",{//const Livro é a Tabela, db.Livraria é a instancia do banco . define é o metodo do Sequelize para definir a tabela
    id: {
        type: Sequelize.INTEGER,//tipo inteiro
        autoIncrement: true, //auto increment
        allowNull: false, //não pode ser nulo
        primaryKey: true // chave primaria
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    autor:{
        type: Sequelize.STRING,
    allowNull: false
    },
    genero:{
    type: Sequelize.STRING,
    allowNull: false
    }
})
module.exports=Livro;