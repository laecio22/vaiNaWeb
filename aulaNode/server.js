require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Rota principal teste 20");
});

app.listen(PORT, () => {
  console.log("Servidor  funcionando");
});
