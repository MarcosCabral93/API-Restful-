const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./ /infra/database.db')

const GENERO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "GENERO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "GENERO" varchar(64),
    "SUBGENERO" varchar(64),
    "AREA_CONHECIMENTO" varchar(64)
  );`;

function criarTblGenero(){

    db.run(GENERO_SCHEMA, (error) => {
        if(error) console.log("Erro ao criar tabela de Genero")
    })
}

db.serialize( ()=>{
    criarTblGenero()

})