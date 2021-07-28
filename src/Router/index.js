 const livros = require('./livroRouter')
const genero = require ('./generoRouter')

 const express=require('express')

 
 module.exports = app => {
    app.use(
    express.json(),
      livros,
      //autor,
      genero
     
    )
  }
  
 
 