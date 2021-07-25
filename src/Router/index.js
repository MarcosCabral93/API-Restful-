 const livros=require('./livroRouter')

 const express=require('express')

 
 module.exports = app => {
    app.use(
    express.json(),
      livros,
      
     
    )
  }
  
 
 