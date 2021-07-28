const express=require('express')
const genero = require ('./generoRouter')
const livro = require('./livroRouter')
const autor =require('./autorRouter')
const cors = require('cors')
 module.exports = app => {
    app.use(
      cors(),
      express.json(),
      livro,
      autor,
      genero
     
    )
  }
  
 
 