![alt ou título da imagem](https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)
![alt ou título da imagem](https://img.shields.io/badge/javascript-323330?style=for-the-badge&logo=javascript&logocolor=f7df1e)

# LIVRARIA_API
#

## A solução de estoque para sua livraria!
## Com o livraria api você pode gerenciar o estoque de livros!



## As dependencias utilizadas no projeto foram:
- ![alt ou título da imagem](https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765)
- ![alt ou título da imagem](https://camo.githubusercontent.com/0a4aff6e255d17730282bc6b00ed6c73a3f09bca95365a4f5d73462106f8a789/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d53657175656c697a6526636f6c6f723d323232323232266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d353242304537266c6162656c3d)
- ![alt ou título da imagem](https://camo.githubusercontent.com/932123bf240349f3785c02228b113b06299079e8740f480c767e8335fd6d752a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3037343035453f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465)
- ![alt ou título da imagem](https://img.shields.io/badge/cors-%20-yellowgreen)
- ![alt ou título da imagem](https://img.shields.io/badge/nodemon-green)

## Iniciando o projeto na sua maquina
### Ter certeza que está nesse repositório
### Tonsiderando que você ja tem o git na sua maquina
- crie uma pasta na area de trabalho com nome livraria
- no cmd ( prompt de comando ) ou powershell digite
- `cd /users\user\desktop\livraria` <<< onde \user provavelmente seu nome de usuario do windows.
#### Execute os comandos abaixo ainda no cmd ou powershell
- ` git init`
- `git clone https://github.com/patolinodd/livraria_api.git` << faz o download de todos os arquivo na sua maquina
- `cd livraria_api`

### Egora vamos preparar o ambiente para execução
#### no cmd, terminal ou powershell
- `cd livraria_api` << vai para a pasta livraria_api
- `npm init -y` << para iniciar o nosso arquivo package.json com dependencias do projeto
- `npm install` << para instalar todas as dependecias

## Agora você tem todos os arquivos na sua maquina e pronto para usa-lo!!
### se você não tem o insomnia recomendo que faça o download dele na sua maquina!

- [download insomnia](https://insomnia.rest/download)


### agora você tem tudo pra usar livraria_api na sua maquina!!

### vamos começar!!?
### no cmd, terminal ou powershell
#### para rodar o livraria api
- ` npm start `


- abrindo o insomnia você verá algo do tipo


| filter    | + v      |
| :-------- | :------- |

- clique no sinal de soma ( + )
- escolha >> new request
- você vera algo parecido com o exemplo abaixo!

| **name** ( _defaul to your request url if left empty_ )|        |
| :-----------------------------------------------       | :----- |
| my request                                             |  get   |
|                                                        | create |

- clicando em get você poderá escolher qualquer um entre os quais usamos nessa livraria
- ![get](https://img.shields.io/badge/get-purple.svg)
- ![post](https://img.shields.io/badge/post-green.svg)
- ![put](https://img.shields.io/badge/put-orange.svg)
- ![delete](https://img.shields.io/badge/delete-red.svg)
- vamos usar o get primeiro depois é só clicar em **create**





# usando o ![get](https://img.shields.io/badge/get-purple.svg)

#### agora você deve estar vendo algo do tipo

| get  | `https://api.myproduct.com/v1/users` | send |
| :--  | :---------------------------------   | :--- |
| body |                                      |      |

- clique em body e escolha o json
- para fazer a consulta dos autores que existem, cole em cima dessa url o link abaixo e clique no send
```http
http://localhost:3000/autores 
```
- o resultado deve ser algo do tipo
```json
[
  {
    "id": 2,
    "nome": "hp lovecraft",
    "nacionalidade": "americano",
    "createdat": "2021-07-29t00:58:06.380z",
    "updatedat": "2021-07-29t00:58:06.380z"
  },
  {
    "id": 3,
    "nome": "jose saramago",
    "nacionalidade": "portugues",
    "createdat": "2021-07-29t01:01:35.464z",
    "updatedat": "2021-07-29t01:01:35.464z"
  }
]
```

- para fazer a consulta de um autor existente
```http
http://localhost:3000/autores/1 ou 2
```
- note que o numero 1 ou 2 é o id do autor

# usando o ![post](https://img.shields.io/badge/post-green.svg)
### agora você sabe quais autore existem
### vamos por mais no registro??
- para inserir um novo autor, a rota é o mesmo link
```http
http://localhost:3000/autores
```
- dentro do insomnia, abaixo do json vamos colar esse novo autor!
```json
{
"nome": "ozamu tesuca",
"nacionalidade": "japão"
}
```
- você deve ter visto ao lado algo assim:
```json
{
  "id": 7,
  "nome": "ozamu tesuca",
  "nacionalidade": "japão",
  "updatedat": "2021-07-29t06:54:26.630z",
  "createdat": "2021-07-29t06:54:26.630z"
}
```
### opa! acho que errei o nome do autor
### vamos atualizar!?
# usando o ![put](https://img.shields.io/badge/put-orange.svg)
- vamos pegar o id do autor que queremos atualizar?
```http
http://localhost:3000/autores/7
```
- agora acredito que está certo!
```json
{
"nome": "osamu tezuka",
"nacionalidade": "japão"
}
```

### mas e se quiser deletar uns autores que já sairam da minha livraria?

# usando o ![delete](https://img.shields.io/badge/delete-red.svg)
### não vamos deletar o osamu tezuka vamos precisar dele mais pra frente!
### mesma etapa mas o metodo é delete.

- rota para apagar o autor e clique no send
 ```http
 localhost:3000/autores/1 ou 2
```
- **cuidado, tenha certeza que você vai apagar o autor correto!**

# vamos ver quais generos existem no registro??
### vamos usar o metodo ![get](https://img.shields.io/badge/get-purple.svg) e a rota é o link abaixo
```http
localhost:3000/genero
```
- deve ver algum resultado assim
```json
[
  {
    "id": 1,
    "genero": "romance",
    "createdat": "2021-07-29t00:45:29.254z",
    "updatedat": "2021-07-29t00:45:29.254z"
  },
  {
    "id": 2,
    "genero": "fantasia",
    "createdat": "2021-07-29t00:45:42.407z",
    "updatedat": "2021-07-29t00:45:42.407z"
  },
  {
    "id": 3,
    "genero": "medieval",
    "createdat": "2021-07-29t00:45:49.266z",
    "updatedat": "2021-07-29t00:45:49.266z"
  },
  {
    "id": 4,
    "genero": "aventura",
    "createdat": "2021-07-29t00:52:41.340z",
    "updatedat": "2021-07-29t00:52:41.340z"
  }
]
```
- grave bem os ids dos generos, vamos precisar

# Usando o ![post](https://img.shields.io/badge/post-green.svg)
- Link para o post é o msm do anterior mas o metodo é ![post](https://img.shields.io/badge/post-green.svg)
```http
localhost:3000/genero
```
- E vamos adicionar um genero!
```json
{
 "genero": "acão"
}
```
- Você deve ver algo do tipo
```http
{
  "id": 5,
  "genero": "acão",
  "updatedat": "2021-07-29t07:36:27.141z",
  "createdat": "2021-07-29t07:36:27.141z"
}
```
### E se for preciso atualizar algum campo?
### Para isso usaremos o método:
# ![put](https://img.shields.io/badge/put-orange.svg)

- rota para atualizar
```http
localhost:3000/genero/5
```
- Agora sim!
```json
	{
		"genero": "ação"
	}
```
# Usando o ![delete](https://img.shields.io/badge/delete-red.svg)
### eu não sou muito fã do genero romantico
então vamos deletar ele!
```http
localhost:3000/genero/1
```
- ok, o romance foi deletado

# Agora vamos ver os livros!!
#
# Usando o ![get](https://img.shields.io/badge/get-purple.svg)
## para pesquisar todos os livros que existem??
- rota para ver os livros
```http
localhost:3000/livros
```
- você deve ver algo do tipo
```json
[
  {
    "id": 1,
    "titulo": "o senhor dos aneis ",
    "autorid": null,
    "autorurl": null,
    "url": "http://localhost:3000/livros/1",
    "capaurl": "https://images-na.ssl-images-amazon.com/images/i/81lq5n0qwjl.jpg"
  },
  {
    "id": 2,
    "titulo": "ensaio sobre a segueira ",
    "autorid": 3,
    "autorurl": "http://localhost:3000/autores/3",
    "url": "http://localhost:3000/livros/2",
    "capaurl": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/12/livro11.jpg"
  },
  {
    "id": 3,
    "titulo": "ensaio sobre a segueira ",
    "autorid": 3,
    "autorurl": "http://localhost:3000/autores/3",
    "url": "http://localhost:3000/livros/3",
    "capaurl": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/12/livro11.jpg"
  },
  {
    "id": 4,
    "titulo": "ensaio sobre a lucidez ",
    "autorid": 3,
    "autorurl": "http://localhost:3000/autores/3",
    "url": "http://localhost:3000/livros/4",
    "capaurl": "https://livrariataverna.com.br/2636/ensaio-sobre-a-lucidez-jose-saramago.jpg"
  }
]
```
- rota para pegar um livro existente
```json 
localhost:3000/livros/1
```
- o resultado deve ser esse
```json
{
  "id": 1,
  "titulo": "o senhor dos aneis ",
  "capaurl": "https://images-na.ssl-images-amazon.com/images/i/81lq5n0qwjl.jpg",
  "preco": 70,
  "generos": [
    "romance",
    "fantasia"
  ],
  "autor": {
    "autorid": 1,
    "nome": "jrr tolkien",
    "nacionalidade:": "britanico"
  }
}
```
### bom! agora que já sabemos quais os livros que existem, eu quero saber, como que eu insiro mais livros?
 # usando o ![post](https://img.shields.io/badge/post-green.svg)
 - rota para inserir um novo livro
 ```http
 localhost:3000/livros
 ```
 - livro a ser inserido. lembra que eu disse que usariamos o autor!? Osamu Tezuka é o id 7 para mim
 - qual o genero do livro? acho que é ação e aventura qual o id deles?? 4 e 5
 - capaurl é uma imagem da internet
 ```json
 {
    "titulo": "astro boy",
    "preco": 35,
    "autorid": 7,
    "generos": [4,5],
    "capaurl": "https://th.bing.com/th/id/oip.6miup3momlt7uwj9hhvo7ghajq?pid=imgdet&rs=1"
}
 ```
 - você deve ver algo do tipo
 ```json
  {
    "id": 5
    "titulo": "astro boy",
    "preco": 35,
    "autorid": 7,
    "generos":[4,5],
    "capaurl": "https://th.bing.com/th/id/oip.6miup3momlt7uwj9hhvo7ghajq?pid=imgdet&rs=1"
    "updatedat": "2021-07-29t07:36:27.141z",
    "createdat": "2021-07-29t07:36:27.141z"
}
 ```

 ### vamos atualizar o preço dele então
 #usando o ![put](https://img.shields.io/badge/put-orange.svg)
 - rota para atualizar o livro
 ```http
 localhost:3000/livros
 ```
 - livro com preço atualizado
 ```json
 {
    "id": 5
    "titulo": "astro boy",
    "preco": 37.79,
    "autorid": 7,
    "generos":[4,5],
    "capaurl": "https://th.bing.com/th/id/oip.6miup3momlt7uwj9hhvo7ghajq?pid=imgdet&rs=1"
 }
 ```
 ### pronto! Agora se quiser, vamos deletar!
 # usando o ![delete](https://img.shields.io/badge/delete-red.svg)
 - rota que vamos usar para deletar o livro
 ```http
 localhost:3000/livros/5
 ```
 #### Com isso o livro foi deletado! Também os campos referentes a esse livro também são excluidos da tabela intermediaria Generos_Livros 
 
 #### gostou!?? conheça mais sobre a gente, é só descer mais um pouco!

#
## ![github_devs](https://img.shields.io/badge/github_devs-100000?style=for-the-badge&logo=github&logocolor=white)
- [arturacm](https://github.com/arturacm)
- [galvaonana](https://github.com/galvaonana)
- [marcoscabral](https://github.com/marcoscabral93)
- [patolinodd](https://github.com/patolinodd) 
- [verginia-fleitas](https://github.com/verginia-fleitas)



