const express = require("express");
const router = express.Router();

const AutoresController = require("../src/controllers/AutoresController")
const LivrosController = require("../src/controllers/LivrosController")

//livros
router.get("/livros", LivrosController.getAllLivros);
router.post("/livros", LivrosController.insertOneLivro);

//autores
router.get("/autores", AutoresController.getAllAutores);
router.post("/autores", AutoresController.createAutor);
//router.patch("/autores/id/update", AutoresController.updateAutor);
//router.delete("/autores/id/delete", AutoresController.deleteAutor);


module.exports = router;