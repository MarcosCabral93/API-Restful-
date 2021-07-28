const router=require('express').Router()


const autoresController = require('../controllers/AutorController')


router



//Autores
.get("/autores", autoresController.getAllAutores)
.post("/autores", autoresController.createAutor)
module.exports=router