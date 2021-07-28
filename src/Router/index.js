const express=require('express')
const genero = require ('./generoRouter')
const livro = require('./livroRouter')
const autor =require('./autorRouter')
 module.exports = app => {
    app.use(
    express.json(),
      livro,
      autor,
      genero
     
    )
  }
  
 
 