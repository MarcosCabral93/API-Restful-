//Importando o Sequelize
const Sequelize=require('sequelize')//o const Sequelize é uma classe.

//Criar o banco
const Livraria= new Sequelize("Livraria","root", "1111",{
    dialect: 'sqlite',//linguagem do banco
    storage: './Livraria.sqlite'// local aonde o banco ira alocar 
})
module.exports=Livraria