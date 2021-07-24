const express = require("express")//importando e Express
const app = express() //instanciando o express

app.use(express.json())// usando o middleware json
const {APP_PORT,APP_NAME}=require('./src/config/config')//importando o nome da rota e a porta

const Autor=require('./src/models/AutorModel')
const Livro=require('./src/models/LivrosModel')

const livroController=require('./src/controllers/LivrosController')

//toda vez que inicia a aplicação, é verificado o bd
const db = require("./src/infra/db")
db.sync()
.then(()=>console.log("banco conectado e sincronizado e pronto para uso"))
.catch((e)=>console.log(e))

app.use("/",livroController);

app.listen(APP_PORT,()=>{
    console.log(`O ${APP_NAME} monstrao ta rodando na porta  ${APP_PORT} bixo`)
})