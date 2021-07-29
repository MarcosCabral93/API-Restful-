![Alt ou título da imagem](https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)
![Alt ou título da imagem](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

# LIVRARIA_API 
#

## A SOLUÇÃO DE ESTOQUE PARA SUA LIVRARIA!
## COM O LIVRARIA API VOCÊ PODE GERENCIAR O ESTOQUE DE LIVROS!



## As dependencias utilizadas no projeto foram:
- ![Alt ou título da imagem](https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765)
- ![Alt ou título da imagem](https://camo.githubusercontent.com/0a4aff6e255d17730282bc6b00ed6c73a3f09bca95365a4f5d73462106f8a789/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d53657175656c697a6526636f6c6f723d323232323232266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d353242304537266c6162656c3d)
- ![Alt ou título da imagem](https://camo.githubusercontent.com/932123bf240349f3785c02228b113b06299079e8740f480c767e8335fd6d752a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3037343035453f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465)
- ![Alt ou título da imagem](https://img.shields.io/badge/Cors-%20-yellowgreen)
- ![Alt ou título da imagem](https://img.shields.io/badge/Nodemon-green)

## INICIANDO O PROJETO NA SUA MAQUINA
### TER CERTEZA QUE ESTÁ NESSE REPOSITÓRIO
### CONSIDERANDO QUE VOCÊ JA TEM O GIT NA SUA MAQUINA
- CRIE UMA PASTA NA AREA DE TRABALHO COM NOME LIVRARIA
- NO CMD ( PROMPT DE COMANDO ) OU POWERSHELL DIGITE
- `cd /users\user\desktop\livraria` <<< ONDE \user provavelmente seu nome de usuario do windows.
#### EXECUTE OS COMANDOS ABAIXO AINDA NO CMD OU POWERSHELL
- ` git init`
- `git clone https://github.com/PATOLINODD/livraria_API.git` << FAZ O DOWNLOAD DE TODOS OS ARQUIVO NA SUA MAQUINA
- `cd livraria_api`

### AGORA VAMOS PREPARAR O AMBIENTE PARA EXECUÇÃO!
#### NO CMD ( PROMPT DE COMANDO ) OU POWERSHELL
- `cd livraria_api` << vai para a pasta livraria_api
- `npm init -y` << para iniciar o nosso arquivo package.json com nossas dependencias
- `npm install` << para instalar todas as dependecias

## AGORA VOCÊ TEM TODOS OS ARQUIVOS NA SUA MAQUINA E PRONTO PARA USA-LO!!
### SE VOCÊ NÃO TEM O INSOMNIA RECOMENDO QUE FAÇA O DOWNLOAD DELE NA SUA MAQUINA!

- [DOWNLOAD INSOMNIA](https://insomnia.rest/download)


### AGORA VOCÊ TEM TUDO PRA USAR LIVRARIA_API NA SUA MAQUINA!!
#### APOSTO QUE ESTAVA ANSIOSO!! RSRS 
### VAMOS COMEÇAR!!?
### NO CMD ( PROMPT DE COMANDO ) OU POWERSHELL
#### PARA RODAR O LIVRARIA API
- ` npm start `


- ABRINDO O INSOMNIA VOCÊ VERÁ ALGO DO TIPO


| Filter    | + v      |
| :-------- | :------- |

- CLIQUE NO SINAL DE SOMA ( + )
- ESCOLHA >> New Request
- VOCÊ VERA ALGO PARECIDO COM O EXEMPLO ABAIXO!

| **Name** ( _defaul to your request URL if left empty_ )|        |
| :-----------------------------------------------       | :----- |
| My Request                                             |  GET   |
|                                                        | Create |

- CLICANDO EM GET VOCÊ PODERÁ ESCOLHER QUALQUER UM ENTRE OS QUAIS USAMOS NESSA LIVRARIA
- ![GET](https://img.shields.io/badge/GET-purple.svg)
- ![POST](https://img.shields.io/badge/POST-green.svg)
- ![PUT](https://img.shields.io/badge/PUT-orange.svg)
- ![DELETE](https://img.shields.io/badge/DELETE-red.svg)
- VAMOS USAR O GET PRIMEIRO DEPOIS É SÓ CLICAR EM **Create**





# USANDO O ![GET](https://img.shields.io/badge/GET-purple.svg)

#### AGORA VOCÊ DEVE ESTAR VENDO ALGO DO TIPO

| GET  | `https://api.myproduct.com/v1/users` | SEND |
| :--  | :---------------------------------   | :--- |
| BODY |                                      |      |

- CLIQUE EM BODY E ESCOLHA O JSON
- PARA FAZER A CONSULTA DOS AUTORES QUE EXISTEM, COLE EM CIMA DESSA URL O LINK ABAIXO E CLIQUE NO SEND
```http
http://localhost:3000/autores 
```
- O RESULTADO DEVE SER ALGO DO TIPO
```json
[
  {
    "id": 2,
    "nome": "HP Lovecraft",
    "nacionalidade": "Americano",
    "createdAt": "2021-07-29T00:58:06.380Z",
    "updatedAt": "2021-07-29T00:58:06.380Z"
  },
  {
    "id": 3,
    "nome": "Jose Saramago",
    "nacionalidade": "Portugues",
    "createdAt": "2021-07-29T01:01:35.464Z",
    "updatedAt": "2021-07-29T01:01:35.464Z"
  }
]
```

- PARA FAZER A CONSULTA DE UM AUTOR EXISTENTE
```http
http://localhost:3000/autores/1 ou 2
```
- NOTE QUE O NUMERO 1 ou 2 É O ID DO AUTOR

# USANDO O ![POST](https://img.shields.io/badge/POST-green.svg)
### AGORA VOCÊ SABE QUAIS AUTORE EXISTEM
### VAMOS POR MAIS NO REGISTRO??
- PARA INSERIR UM NOVO AUTOR, A ROTA É O MESMO LINK
```http
http://localhost:3000/autores
```
- DENTRO DO INSOMNIA, ABAIXO DO JSON VAMOS COLAR ESSE NOVO AUTOR!
```json
{
"nome": "Ozamu Tesuca",
"nacionalidade": "Japão"
}
```
- VOCÊ DEVE TER VISTO AO LADO ALGO ASSIM:
```json
{
  "id": 7,
  "nome": "Ozamu Tesuca",
  "nacionalidade": "Japão",
  "updatedAt": "2021-07-29T06:54:26.630Z",
  "createdAt": "2021-07-29T06:54:26.630Z"
}
```
### OPA! ACHO QUE ERREI O NOME DO AUTOR
### VAMOS ATUALIZAR!?
# USANDO O ![PUT](https://img.shields.io/badge/PUT-orange.svg)
- VAMOS PEGAR O ID DO AUTOR QUE QUEREMOS ATUALIZAR?
```http
http://localhost:3000/autores/7
```
- AGORA ACREDITO QUE ESTÁ CERTO!
```json
{
"nome": "Osamu Tezuka",
"nacionalidade": "Japão"
}
```
### É! TUDO PARECE PERFETO, NÉ!? 
### MAS EU QUERO DELETAR UNS AUTORES QUE JÁ SAIRAM DA MINHA LIVRARIA

# USANDO O ![DELETE](https://img.shields.io/badge/DELETE-red.svg)
### NÃO VAMOS DELETAR O Osamu Tezuka VAMOS PRECISAR DELE MAIS PRA FRENTE!
### MESMA ETAPA MAS O METODO É DELETE.

- ROTA PARA APAGAR O AUTOR E CLIQUE NO SEND
 ```http
 localhost:3000/autores/1 ou 2
```
- **CUIDADO, TENHA CERTEZA QUE VOCÊ VAI APAGAR O AUTOR CORRETO!**

# VAMOS VER QUAIS GENEROS EXISTEM NO REGISTRO??
### VAMOS USAR O METODO ![GET](https://img.shields.io/badge/GET-purple.svg) E A ROTA É O LINK ABAIXO
```http
localhost:3000/genero
```
- DEVE VER ALGUM RESULTADO ASSIM
```json
[
  {
    "id": 1,
    "genero": "Romance",
    "createdAt": "2021-07-29T00:45:29.254Z",
    "updatedAt": "2021-07-29T00:45:29.254Z"
  },
  {
    "id": 2,
    "genero": "Fantasia",
    "createdAt": "2021-07-29T00:45:42.407Z",
    "updatedAt": "2021-07-29T00:45:42.407Z"
  },
  {
    "id": 3,
    "genero": "Medieval",
    "createdAt": "2021-07-29T00:45:49.266Z",
    "updatedAt": "2021-07-29T00:45:49.266Z"
  },
  {
    "id": 4,
    "genero": "Aventura",
    "createdAt": "2021-07-29T00:52:41.340Z",
    "updatedAt": "2021-07-29T00:52:41.340Z"
  }
]
```
- GRAVE BEM OS IDs DOS GENEROS, VAMOS PRECISAR

# USANDO O ![POST](https://img.shields.io/badge/POST-green.svg)
- LINK PARA O POST É O MSM DO ANTERIOR MAS O METODO É ![POST](https://img.shields.io/badge/POST-green.svg)
```http
localhost:3000/genero
```
- E VAMOS ADICIONAR UM GENERO!
```json
{
 "genero": "Acão"
}
```
- VOCÊ DEVE VER ALGO DO TIPO
```http
{
  "id": 5,
  "genero": "Acão",
  "updatedAt": "2021-07-29T07:36:27.141Z",
  "createdAt": "2021-07-29T07:36:27.141Z"
}
```
### OPA! ACHO QUE EU ERREI O NOME AÇÃO, E COLOQUEI ACÃO
### É, ACHO QUE DEVEMOS ATUALIZAR ISSO AI
# USANDO O ![PUT](https://img.shields.io/badge/PUT-orange.svg)

- ROTA PARA ATUALIZAR
```http
localhost:3000/genero/5
```
- AGORA SIM EU ACERTEI! RSRSRS
```json
	{
		"genero": "Ação"
	}
```
# USANDO O ![DELETE](https://img.shields.io/badge/DELETE-red.svg)
### EU NÃO SOU MUITO FÃ DO GENERO ROMANTICO
ENTÃO VAMOS DELETAR ELE!
- ROTA QUE VAI DELETAR
```http
localhost:3000/genero/1
```
- OK, O ROMANCE FOI DELETADO

# AGORA VAMOS VER OS LIVROS!!
#
# USANDO O ![GET](https://img.shields.io/badge/GET-purple.svg)
## PARA PESQUISAR TODOS OS LIVROS QUE EXISTEM??
- ROTA PARA VER OS LIVROS
```http
localhost:3000/livros
```
- VOCÊ DEVE VER ALGO DO TIPO
```json
[
  {
    "id": 1,
    "titulo": "O senhor dos aneis ",
    "autorId": null,
    "autorUrl": null,
    "url": "http://localhost:3000/livros/1",
    "capaURL": "https://images-na.ssl-images-amazon.com/images/I/81lQ5N0QwJL.jpg"
  },
  {
    "id": 2,
    "titulo": "Ensaio sobre a Segueira ",
    "autorId": 3,
    "autorUrl": "http://localhost:3000/autores/3",
    "url": "http://localhost:3000/livros/2",
    "capaURL": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/12/livro11.jpg"
  },
  {
    "id": 3,
    "titulo": "Ensaio sobre a Segueira ",
    "autorId": 3,
    "autorUrl": "http://localhost:3000/autores/3",
    "url": "http://localhost:3000/livros/3",
    "capaURL": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/12/livro11.jpg"
  },
  {
    "id": 4,
    "titulo": "Ensaio sobre a Lucidez ",
    "autorId": 3,
    "autorUrl": "http://localhost:3000/autores/3",
    "url": "http://localhost:3000/livros/4",
    "capaURL": "https://livrariataverna.com.br/2636/ensaio-sobre-a-lucidez-jose-saramago.jpg"
  }
]
```
- ROTA PARA PEGAR UM LIVRO EXISTENTE
```json 
localhost:3000/livros/1
```
- O RESULTADO DEVE SER ESSE
```json
{
    "id": 1,
    "titulo": "O senhor dos aneis ",
    "autorId": null,
    "autorUrl": null,
    "url": "http://localhost:3000/livros/1",
    "capaURL": "https://images-na.ssl-images-amazon.com/images/I/81lQ5N0QwJL.jpg"
 }
```
### BOM! AGORA QUE JÁ SABEMOS QUAIS OS LIVROS QUE EXISTEM, EU QUERO SABER, COMO QUE EU INSIRO MAIS LIVROS??
 # USANDO O ![POST](https://img.shields.io/badge/POST-green.svg)
 - ROTA PARA INSERIR UM NOVO LIVRO
 ```http
 localhost:3000/livros
 ```
 - LIVRO A SER INSERIDO. LEMBRA QUE EU DISSE QUE USARIAMOS O AUTOR!? Osamu Tezuka É O ID 7 PRA MIM
 - QUAL O GENERO DO LIVRO? ACHO QUE É AÇÃO E AVENTURA QUAL O ID DELES?? 4 e 5
 - capaURL É UMA IMAGEM DA INTERNET
 ```json
 {
    "titulo": "Astro Boy",
    "preco": 35,
    "autorId": 7,
    "generos": [4,5],
    "capaURL": "https://th.bing.com/th/id/OIP.6Miup3mOMLt7UwJ9hhVo7gHaJq?pid=ImgDet&rs=1"
}
 ```
 - VOCÊ DEVE VER ALGO DO TIPO
 ```json
  {
    "id": 5
    "titulo": "Astro Boy",
    "preco": 35,
    "autorId": 7,
    "generos":[4,5],
    "capaURL": "https://th.bing.com/th/id/OIP.6Miup3mOMLt7UwJ9hhVo7gHaJq?pid=ImgDet&rs=1"
    "updatedAt": "2021-07-29T07:36:27.141Z",
    "createdAt": "2021-07-29T07:36:27.141Z"
}
 ```
 ### ÉÉÉ, ACHOU QUE EU IA ERRAR, NÉ? AGORA EU ESCREVI TUDO CERTINHO!
 ### MAS O PREÇO FOI ATUALIZADO AGORA A POUCO
 ### VAMOS ATUALIZAR O PREÇO DELE ENTÃO
 #USANDO O ![PUT](https://img.shields.io/badge/PUT-orange.svg)
 - ROTA PARA ATUALIZAR O LIVRO
 ```http
 localhost:3000/livros
 ```
 - LIVRO COM PREÇO ATUALIZADO
 ```json
 {
    "id": 5
    "titulo": "Astro Boy",
    "preco": 37.79,
    "autorId": 7,
    "generos":[4,5],
    "capaURL": "https://th.bing.com/th/id/OIP.6Miup3mOMLt7UwJ9hhVo7gHaJq?pid=ImgDet&rs=1"
 }
 ```
 ### PRONTO! AGORA SE QUISER, VAMOS DELETAR!
 # USANDO O ![DELETE](https://img.shields.io/badge/DELETE-red.svg)
 - ROTA QUE VAMOS USAR PARA DELETAR O LIVRO
 ```http
 localhost:3000/livros/5
 ```
 #### É, ACREDITO QUE ELE FOI DELETADO!
 #### GOSTOU!?? CONHEÇA MAIS SOBRE A GENTE, É SÓ DESCER MAIS UM POUCO!

#
## ![github_devs](https://img.shields.io/badge/GITHUB_DEVS-100000?style=for-the-badge&logo=github&logoColor=white)
- [arturacm](https://github.com/arturacm)
- [galvaonana](https://github.com/galvaonana)
- [MarcosCabral](https://github.com/MarcosCabral93)
- [PATOLINODD](https://github.com/PATOLINODD) 
- [verginia-fleitas](https://github.com/verginia-fleitas)


