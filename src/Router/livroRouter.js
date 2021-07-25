const router=require('express').Router()

const livroController=require('../controllers/LivrosController')


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
module.exports=router