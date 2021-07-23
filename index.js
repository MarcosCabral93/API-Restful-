const express = require("express")
const app = express()


const LivrosController = require("./src/controllers/LivrosController")
const livrosController = new LivrosController()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("ola mundo parça. Monstro saiu da jaula")
})

app.get("/livros",livrosController.show)
app.post("/livros",livrosController.store)

app.listen(3000,()=>{
    console.log("O monstrao ta rodando bixo")
})