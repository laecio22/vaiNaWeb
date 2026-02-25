//importação  express
const express = require("express");

//criando  aplicação   express, inicializando o servidor
const app = express();

const PORT = 3000;

//Rota principal
app.get("/", (req, res) => {
  //req = request   (dados  enviados pelo  cliente)
  //res = response (resposta  que  vamos enviar)

  res.send("Olá   mundo, Primeira  aula  de  backend");
});

app.listen(PORT, () => {
  console.log("Servidor  funcionando");
});
