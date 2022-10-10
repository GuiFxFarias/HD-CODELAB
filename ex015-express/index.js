const { request, response } = require("express");
const express = require("express");
const servidor = express();

// Criação de banco de dados
const neDB = require("nedb");
const db = new neDB({
  filename: "DataBase.db",
  autoload: true,
});

servidor.get("/produtos", (request, response) => {
  db.find({}).exec((erro, dados) => {
    if (erro) {
      console.error(erro);
    } else {
      response.json(dados);
    }
  });
});

servidor.use(express.json());// ler os dados via chaves
servidor.use(express.urlencoded({extended: true}))// ler dados enviados via post

servidor.post("/produtos", (request, response) => {
  db.insert(request.body, (erro,novoProduto)=>{
    if(erro){
      console.error(erro)
    }else{
      response.
    }
    

  })
  response.json(request.body); //um objeto, json
});

servidor.listen(3000, () => {
  console.log("Já está enm funcionamento");
});
