
///importando o Livro
const livro = require("../models/LivrosModel")

//Classe com Métodos 
class LivrosController{
    
     async getAllLivros(req, res)
     {
        
        const livros = await livro.findAll()//metodo do sequelize para retornar tudo
        console.log(livros);
        res.json(livros)

        //organizando informação para ser enviada como um JSON.
        // const newLivros = livros.map((livro, i, arr)=>{
        //     return{
        //         "titulo":livro.nome,
        //         //"autor":livro.autor,
        //         // "gênero": livro.genero, 
        //         "url": "http://localhost:3000/livros/"+livro.id} //url da requisição especifica do livro
        // })
        console.log(newLivros)
        res.json(newLivros)

    }
     async getOneLivro (req, res){
        const id = req.params.id

        console.log (id)
        try{
            
            const dados = await livro.findAll({
                where:{
                    "id":id
                }
            })//metodo do sequelize para retornar tudo
        
            console.log(dados)
            res.json({  
                "id": dados[0]["id"],
                "titulo": dados[0]["titulo"],
                "preco": dados[0]["preco"],
                "autorID": dados[0]["AutorID"],
                "genero": dados[0]["genero"]})    
        }catch(err){
            console.log("Algo de errado nao está certo"+err)
            res.send("Nenhum livro com esse ID foi encontrado.")
        }
    }
     async insertOneLivro (req, res) {
        try{
            let {titulo,preco,AutorID,genero} = req.body;
            //metodo para criar/post
            const dados = await livro.create({
                titulo: titulo,
                preco:preco,
                AutorID:AutorID,
                genero:genero
            })
            res.json(dados);
        }catch(err){
            console.log("algo de errado nao esta certo"+ err)
            res.send("Por favor insira todos os campos: nome, preco, autor, genero")
        }
    }
      async updateOneLivro  (req,res){
        try{
            const id = req.params.id
            let {nome,preco,autor,genero} = req.body;
            //metodo para criar/post
            const dados = await livro.update({
                nome: nome,
                preco:preco,
                //autor:autor,
                genero:genero
            },{
            where: { "id": id
                
            }})

            //obs: nesse caso o dados é um array com um termo
            //ele volta o status da query. Deu certo volta 1, se errado volta 0
            console.log(dados) 

            if(dados[0])res.send(`Livro de id= ${id} atualizado com sucesso`)
            else res.send(`Nenhum Livro de id= ${id} foi atualizado`)

        }catch(err){
            console.log("algo de errado nao esta certo"+ err)
            res.send("Por favor insira todos os campos: nome, preco, autor, genero")
        }
    }
    async deleteOneLivro(req, res)  {
        const id = req.params.id
        try{
            const dados = await livro.destroy({
                where: {
                    id:id
                }
            })//metodo do sequelize para deletar uma entrada
            console.log(dados)
            
            //o dados é o resultado da query que pode ser 0 ou 1 se ela tiver falhado ou tiver sucesso
            if(dados)res.send(`Livro de id= ${id} removido com sucesso`)
            else res.send(`Nenhum Livro de id= ${id} foi encontrado`)
        }catch(err){
            console.log(`algo de errado nao esta certo com esse erro ${err}`)
            res.send("Falha na deleção do dado")
        }
    }

}
//exportando a Classe Livro para Rotas
module.exports = new LivrosController();
