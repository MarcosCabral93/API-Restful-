///importando o Livro
const autor = require("../models/AutorModel")
const livro = require("../models/LivroModel")
const livro_genero = require("../models/Livro_GeneroModel")
const genero = require("../models/GeneroModel")

//Classe com Métodos 
class LivroController{
    
     async getAllLivros(req, res){
        
        const livros = await livro.findAll()//metodo do sequelize para retornar tudo

        //organizando informação para ser enviada como um JSON.
        const newLivros = livros.map((livro, i, arr)=>{
            return{
                "id": livro.id,
                "titulo":livro.titulo,
                "autorId":livro.autorId,
                "autorUrl":livro.autorId?"http://localhost:3000/autores/"+livro.autorId:null,
                "url": "http://localhost:3000/livros/"+livro.id,
                "capaURL": livro.capaURL
            
                } //url da requisição especifica do livro
        })
        
        res.json(newLivros)
    }
     async getOneLivro (req, res){
        const id = req.params.id

        try{

            //Busca pelo id adcionando tabelas com relação. No caso, a tabela generos e a tabela autores
            const dados = await livro.findByPk(id,{
                include: [
                   { 
                        model: genero,
                        as: 'generos'
                   },
                   {
                       model: autor,
                       as: "autor",

                   }
                ]
           })

           res.json({
            "id": dados.id,
            "titulo": dados.titulo,
            "capaURL": dados.capaURL,
            "preco": dados.preco,
            "generos": dados.generos.map(e=>e.genero),
            "autor":{
                "autorId": dados.autorId,
                "nome":dados.autor.nome,
                "nacionalidade:":dados.autor.nacionalidade
            },
        
           })

        }catch(err){
            console.log("Algo de errado nao está certo "+err)
            res.status(404).send("Nenhum livro com esse ID foi encontrado.")
        }
    }
     async insertOneLivro (req, res) {
        try{
            let {titulo,preco,autorId,generos,capaURL} = req.body;
            //metodo para criar/post
            const autorCheck = await autor.findByPk(autorId)

            if(!autorCheck) throw new error("Autor Indiponivel")

            const checkGenero = generos.map(async (id)=> await genero.findByPk(id))

            //tudo OK agora inserir dados
            
            const dados = await livro.create({
                titulo: titulo,
                preco:preco,
                autorId:autorId,
                capaURL:capaURL
            })

            generos.forEach(async (generoId)=>livro_genero.create({
                "generoId": generoId,
                "livroId": dados.id
            }))
            res.json(dados);
        }catch(err){
            console.log("algo de errado nao esta certo"+ err)
            res.status(404).send("Por favor insira todos os campos: nome, preco, autor, genero")
        }
    }
      async updateOneLivro (req,res){
        try{
            const id = req.params.id
            let {titulo,preco,autorId,generos,capaURL} = req.body;
            //metodo para criar/post
            
            const autorCheck = await autor.findByPk(autorId)

            if(!autorCheck) throw new error("Autor Indiponivel")
            
            const checkGenero = generos.map(async (id)=> await genero.findByPk(id))

            const dados = await livro.update({
                titulo: titulo,
                preco:preco,
                autorId:autorId,
                capaURL:capaURL
            },{
            where: { "id": id
                
            }})
            //obs: nesse caso o dados é um array com um termo
            //ele volta o status da query. Deu certo volta 1, se errado volta 0
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
module.exports = new LivroController();
