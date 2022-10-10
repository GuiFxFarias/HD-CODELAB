const express = require("express");

const servidor = express();

servidor.get("/produtos", (request, response) => {
  response.json({
    sucesso: true,
  });
});

servidor.listen(4000, () => {
  console.log("Já está enm funcionamento");
});
