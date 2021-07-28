    //db e sequelize sao classes; requerimento do db e do sequelize 
    const db = require("../infra/db")
    const Sequelize = require('sequelize')
        //criando a tabela autor chamando a função define
    const Autor = db.define("autor", {

        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nacionalidade: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    module.exports = Autor;