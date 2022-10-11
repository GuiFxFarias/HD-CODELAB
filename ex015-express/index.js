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
      response.statusCode = 200;
      response.setHeader("Content-type", "application/json");
    }
  });
});

servidor.delete("/produtos", (request, response) => {
  db.remove({ _id: request.params.id }, {multi: false}, ()=> {
    (erro, registRemove) => {
      if (erro) {
        console.error(erro);
      } else {
        response.setHeader("Content-type", "application/json");
        response.status(200).json({ registRemove });
      }
    };
});

servidor.put("/produtos/:id", (request, response) => {
  db.update({ _id: request.params.id }, request.body, (erro) => {
    if (erro) {
      console.error(erro);
    } else {
      response.statusCode = 200;
      response.setHeader("Content-type", "application/json"); //conteudo retornado em json para o servidor
      response.json({
        mensagem: `Produto atualizado com sucesso: ${request.params.id}`,
      });
    }
  });
  // response.status(200).json(request.params) // pegar o parametro da lista
  response.status(200).send(request.body);
});

servidor.use(express.json()); // ler os dados via chaves
servidor.use(express.urlencoded({ extended: true })); // ler dados enviados via post

servidor.post("/produtos", (request, response) => {
  db.insert(request.body, (erro, novoProduto) => {
    if (erro) {
      console.error(erro);
    } else {
      response.statusCode = 200;
      response.setHeader("Content-type", "application/json"); //conteudo retornado em json para o servidor
      response.json(novoProduto);
    }
  });
  response.json(request.body); //um objeto, json
});

servidor.listen(3000, () => {
  console.log("Já está enm funcionamento");
});
