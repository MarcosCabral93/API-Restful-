const router=require('express').Router()
//
const generoController=require('../controllers/GeneroController')


router

.get ("/genero", generoController.getAllGenero)
        
//um genero

.get ("/genero/:id", generoController.getOneGenero)

// inserir genero
.post ("/genero/", generoController.insertOneGenero)

// atualizar registro de um genero
.put("/genero/:id", generoController.updateOneGenero)

// deletar registro de um genero
.delete("/genero/:id", generoController.deleteOneGenero)
module.exports=router