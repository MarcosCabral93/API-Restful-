////importando o router
const express = require("express");
const router = express.Router();

///importando o Livro
const livro = require("../models/LivrosModel")

//todos os livros
router.get ("/livros", (req, res) => {
    livro.findAll()//metodo do sequelize para retornar tudo
    .then((dados)=>{
        res.json(dados)
    })
    .catch(e=>{
        res.sendStatus(e)
    })
});

// inserir livros
router.post ("/livros/", (req, res) => {
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
});


/////exportando as rotas do livro
module.exports = router;