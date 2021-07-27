const express = require('express');
const app = express();


const livrariaMostrar = require("./controllers/LivrosController");
const db = require('./infra/sqlite-db');


app.use(express.json());

livrariaMostrar(app,db);

app.listen(process.env.PORT3030, () => {
    console.log(`Servidor rodando na porta:' ${process.env.PORT3030}`)
  })