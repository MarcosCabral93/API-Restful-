const express = require("express");
const router = express.Router();

router.get("/autores", AutoresController.getAllAutores);

//create
router.post("/autores", AutoresController.createAutor);

//read
router.get("/autores", AutoresController.getAutor);

//update
router.patch("/autores/id/update", AutoresController.updateAutor);

//delete
router.delete("/autores/id/delete", AutoresController.deleteAutor);