module.exports = class Livro{
    constructor(titulo, autor, editora, preco){
         this.titulo = titulo;
         this.autor = autor;
         this.editora = editora;
         this.preco = preco;
         this.estoque = 1;
    }
}