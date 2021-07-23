module.exports = class LivroDAO{
    constructor(database){
        this.db = database;
    }
    getAllLivros = () =>{
        return new Promise((resolve,reject)=>{
            //if(err) reject(err)
            //else 
            resolve(this.db.livros)
        })

    }
    insertLivro = (livro)=>{
        return new Promise((resolve, reject)=>{
            this.db.livros.push(livro)
            resolve(this.db.livros)
        })
    }
    // updateLivro = (livro, id)=>{
    //     return new Promise((resolve, reject)=>{

    //         this.db.livros.slice()
    //         resolve(this.db.livros)
    //     })
    // }
}