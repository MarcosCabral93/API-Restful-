const router=require('express').Router()


const autoresController = require('../controllers/AutorController')


router

.get ("/livros", livroController.getAllLivros)
        
//um livro

.get ("/livros/:id", livroController.getOneLivro)

// inserir livros
.post ("/livros/", livroController.insertOneLivro)

// atualizar registro de um livro
.put("/livros/:id", livroController.updateOneLivro)

// deletar registro de um livro
.delete("/livros/:id", livroController.deleteOneLivro)


//Autores
.get("/autores", autoresController.getAllAutores)
.post("/autores", autoresController.createAutor)
module.exports=router