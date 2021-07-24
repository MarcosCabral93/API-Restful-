////importando o router
const express = require("express");
const router = express.Router();

///importando o Livro
const livro = require("../models/LivrosModel")

//
class LivrosController{
    constructor(router){
        //todos os livros
        router.get ("/livros", this.getAllLivros);
        
        //um livro
        router.get ("/livros/:id", this.getOneLivro);

        // inserir livros
        router.post ("/livros/", this.insertOneLivro);

    }
    getAllLivros = async (req, res) => {
        
        const livros = await livro.findAll()//metodo do sequelize para retornar tudo
        
        //organizando informação para ser enviada como um JSON.
        const newLivros = livros.map((livro, i, arr)=>{
            return{
                "titulo":livro.nome,
                "autor":livro.autor,
                "gênero": livro.genero, 
                "url": "http://localhost:3000/livros/"+livro.id} //url da requisição especifica do livro
        })
        console.log(newLivros)
        res.json(newLivros)

    }
    getOneLivro = async (req, res) => {
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
                "titulo": dados[0]["nome"],
                "preco": dados[0]["preco"],
                "autor": dados[0]["autor"],
                "genero": dados[0]["genero"]})    
        }catch(err){
            console.log("Algo de errado nao está certo"+err)
            res.send("Nenhum livro com esse ID foi encontrado.")
        }
    }
    insertOneLivro = (req, res) => {
        let {nome,preco,autor,genero} = req.body;
        //metodo para criar/post
        livro.create({
            nome: nome,
            preco:preco,
            autor:autor,
            genero:genero
        }).then((dados)=>{
            res.send(dados)
        }).catch(e=>{
            res.sendStatus(e)
        })
    }

}
const livroController = new LivrosController(router)

/////exportando as rotas do livro
module.exports = router;