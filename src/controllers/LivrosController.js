const Livro = require("../models/LivrosModel");

module.exports = class LivrosController{
    constructor(DAO){
        this.dbConn = DAO;
    }

    show = async (req,res)=>{
        // res.json(this.db);
        try{
            const livro = await this.dbConn.getAllLivros()
            res.json(livro)
        }catch(err){
            console.log(err)
            res.send("Algo de errado nao está certo: " + err)
        }
  
    }
    store = async (req,res)=>{
        const {titulo, autor, editora, preco} = req.body; //pega coisas do body
        const livro = new Livro(titulo, autor, editora, preco);// instancia novo livro
        console.log(livro);
        
        try{
            const result = await this.dbConn.insertLivro(livro)
            res.json(result)
        }catch(err){
            console.log(err)
            res.send("Algo de errado nao está certo: " + err)
        }
    }
    // update = (req,res)=>{
    //     const id = req.params.id

    //     this.dbConn
    //     .updateOneLivro
    // }
}