const express = require("express");

const servidor = express();

servidor.listen(4000, () => {
  console.log("Já está enm funcionamento");
});
