///importando o Livro
const Genero = require("../models/GeneroModel")

//Classe com Métodos 
class GeneroController{
    
     async getAllGenero(req, res)
     {
        try{        
        const generos = await Genero.findAll()//metodo do sequelize para retornar tudo
        res.json(generos)
        }catch(err){
            res.send(err)
        }
    }

     async getOneGenero (req, res){
        const id = req.params.id
        try{
            const dados = await Genero.findByPk(id)//metodo do sequelize para apenas o item com PK especificada
            res.json(dados)    
        }catch(err){
          res.send("Nenhum livro com esse ID foi encontrado."+err)
        }
    }
    
     async insertOneGenero (req, res) {
        try{
            let {genero} = req.body;
            //metodo para criar/post
            const novo= await Genero.create({
                genero:genero
            })

            
            res.json(novo);
        }catch(err){
            res.send("Deu ruim"+err)
        }
    }
      async updateOneGenero  (req,res){
        try{
            const id = req.params.id
            let {genero} = req.body;
            //metodo para criar/post
            const dados = await Genero.update({
                
                genero:genero
            },{
            where: { "id": id
                
            }})

            if(dados[0])res.send(`Genero de id= ${id} atualizado com sucesso`)
            else res.send(`Nenhum Genero de id= ${id} foi atualizado`)

        }catch(err){
            res.send(err)
        }
    }
    async deleteOneGenero(req, res)  {
        const id = req.params.id
        try{
            const dados = await Genero.destroy({
                where: {
                    id:id
                }
            })
            
            
            if(dados)res.send(`Genero de id= ${id} removido com sucesso`)
            else res.send(`Nenhum Genero de id= ${id} foi encontrado`)
        }catch(err){
            console.log(`algo de errado nao esta certo com esse erro ${err}`)
            res.send("Falha na deleção do dado")
        }
    }

}
//exportando a Classe Livro para Rotas
module.exports = new GeneroController();