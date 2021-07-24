//importando o banco de dados
const db=require("../infra/db")
const Sequelize=require('sequelize')
//criando a tabela livro
const Autor=db.define("Autor",{
    
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nacionalidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ur:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports=Autor;