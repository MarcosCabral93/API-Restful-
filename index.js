const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("ola mundo parça. Monstro saiu da jaula")
})

app.listen(3000,()=>{
    console.log("O monstrao ta rodando bixo")
})