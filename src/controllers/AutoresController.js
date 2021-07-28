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
    updateAutor(req, res) {
        try {
            autor.findByPk(autor_id)
            const id = req.params.id
            let { nome, nacionalidade } = req.bod;
            const dados = await autor.update({
                nome: nome,
                nacionalidade: nacionalidade
            }, {
                where: {
                    "id": id
                }
            })
            if (dados[0]) res.send(`Autor de id= ${id} atualizado com sucesso`)
            else res.send(`Nenhum autor de id=${id} foi atualizado`)
        } catch (err) {
            console.log("Algo deu errado aqui" + err)
            res.send("Por favor, insira os dados do autor desejado novamente")
        }
    }
    deleteAutor(req, res) {
        try {
            const dados = await autor.destroy({
                    where: {
                        id: id
                    }
                }) //metodo sequelize para deletar

            if (dados) res.send(`Autor de id=${autor_id} removido com sucesso`)
            else res.send(`Nenhum livro de id=${autor_id} foi encontrado`)

        } catch (err) {
            console.log(`Algo deu errado no erro ${autor_id}`)
            res.send("Falha na deleção do autor")
        }
    }
}
const autoresController = new AutoresController