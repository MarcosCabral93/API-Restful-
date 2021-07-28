const express = require("express") //importando e Express
const app = express() //instanciando o express
//
const routes=require('./src/Router')

const {APP_PORT,APP_NAME}=require('./src/config/config')//importando o nome da rota e a porta

//Todas as Rotas estão instanciadas aqui
routes(app)



//toda vez que inicia a aplicação, é verificado o bd
const db = require("./src/infra/db")
db.sync()
    .then(() => console.log("banco conectado e sincronizado e pronto para uso"))
    .catch((e) => console.log(e))


app.listen(APP_PORT, () => {
    console.log(`O ${APP_NAME} monstrao ta rodando na porta  ${APP_PORT} bixo`)
})