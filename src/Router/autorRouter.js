const router=require('express').Router()


const autorController = require('../controllers/AutorController')


router
.get("/autores/:id",autorController.getOneAutor)
.get("/autores", autorController.getAllAutores)
.post("/autores", autorController.createAutor)
.put("/autores/:id",autorController.updateAutor)
.delete("/autores/:id",autorController.deleteAutor)
module.exports=router