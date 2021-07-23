const express = require("express")
const app = express()

//banco de dados provisorio
//importações
const database = require("./src/infra/database")
const LivroDAO = require("./dao/LivroDAO")
const LivrosController = require("./src/controllers/LivrosController")

//instanciando
const livroDAO = new LivroDAO(database)
const livrosController = new LivrosController(livroDAO)

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("ola mundo parça. Monstro saiu da jaula")
})

app.get("/livros",livrosController.show)
app.post("/livros",livrosController.store)

app.listen(3000,()=>{
    console.log("O monstrao ta rodando bixo")
})