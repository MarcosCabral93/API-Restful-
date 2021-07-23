const Livro = require("../models/LivrosModel")

module.exports = class LivrosController{
    constructor(){
        this.db = [];

    }
    show = (req,res)=>{
        res.json(this.db)
    }
    store = (req,res)=>{
        console.log(req.body)
        const {titulo, autor, editora, preco} = req.body
        console.log(titulo, autor, editora, preco)
        const livro = new Livro(titulo, autor, editora, preco);
        this.db.push(livro)
        res.json(livro)
    }
}