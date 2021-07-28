const router=require('express').Router()
//
const generoController=require('../controllers/GeneroController')


router

.get ("/generos", generoController.getAllGenero)
        
//um genero

.get ("/generos/:id", generoController.getOneGenero)

// inserir genero
.post ("/generos/", generoController.insertOneGenero)

// atualizar registro de um genero
.put("/generos/:id", generoController.updateOneGenero)

// deletar registro de um genero
.delete("/generos/:id", generoController.deleteOneGenero)
module.exports=router