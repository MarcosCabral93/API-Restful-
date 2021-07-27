const autor = require("../models/AutorModel")
class AutoresController {
    construtor() {
        //Onde a instancia eh construida
    }
    createAutor = (req, res) => {
        let { nome, nacionalidade } = req.body;
        autor.create({
            nome: nome,
            nacionalidade: nacionalidade
        }).then((dados) => {
            res.send(dados)
        }).catch(e => {
            res.sendStatus(e)
        })
    }
    getAllAutores = (req, res) => {
        autor.findAll()
            .then((dados) => {
                res.json(dados)
            })
            .catch(e => {
                res.sendStatus(e)
            })
    }
    updateAutor(autor_id) {
        //atualiza todos os autores
    }
    deleteAutor(autor_id) {
        //deleta um autor especifico
    }
}
const autoresController = new AutoresController