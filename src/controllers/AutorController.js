const autor = require("../models/AutorModel")
class AutorController {
    
    createAutor = (req, res) => {
        let { nome, nacionalidade } = req.body;

        autor.create({
            nome: nome,
            nacionalidade: nacionalidade
        }).then((dados) => {
            res.status(201).json(dados)
        }).catch(e => {
            res.sendStatus(e)
        })
    }
    async getOneAutor (req, res){
        const id = req.params.id
        try{
            const dados = await autor.findByPk(id)//metodo do sequelize para apenas o item com PK especificada
            if(!dados) throw new Error("id inválido")
            res.json(dados)    
        }catch(err){
          res.status(404).send("Nenhum autor com esse ID foi encontrado."+err)
        }
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
    
 async updateAutor(req, res) {
    const id = req.params.id
    try {
        //autor.findByPk(autor_id)
        
        let { nome, nacionalidade } = req.body;
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
async deleteAutor(req, res) {
 
    try {
        const id = req.params.id
        const dados = await autor.destroy({
                where: {
                    id: id
                }
            }) //metodo sequelize para deletar

        if (dados) res.send(`Autor de id=${id} removido com sucesso`)
        else res.status(204).send(`Nenhum livro de id= foi encontrado`)

    } catch (err) {
        console.log(`Algo deu errado no erro ${id}`)
        res.status(404).send("Falha na deleção do autor")
    }
}
}
module.exports = new AutorController();