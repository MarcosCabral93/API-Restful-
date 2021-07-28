//importando o banco de dados
const Sequelize=require('sequelize')//o const Sequelize é uma classe.
const db=require("../infra/db")
const autor = require("./AutorModel")


//criando a tabela livro
const Livro=db.define("livro",{//const Livro é a Tabela, db.Livraria é a instancia do banco . define é o metodo do Sequelize para definir a tabela

    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capaURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

})
autor.hasMany(Livro);
Livro.belongsTo(autor);

module.exports=Livro;