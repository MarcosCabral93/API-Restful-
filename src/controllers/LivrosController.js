const { request, response} = require("express");
const GeneroDAO = require("../DAO/GeneroDAO.js");
const Genero = require("../models/LivrosModel.js");

module.exports = (app, db) => {

    let generoDb = new GeneroDAO(db)

    app.get('/genero', (request, response)=>{
        generoDb.getAllGenero()
        .then((rows) => {
            response.json({
                result:rows,
                count:rows.length
            })
        })
        .catch((err)=>{
            response.json({err})
        })
    })}