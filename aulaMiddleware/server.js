const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

//middleware

// function meuLogger(req, res, next) {
//   console.log("Uma  requisição foi  feita");
//   next(); //passar  para  próxima  etapa
// }

// app.use(meuLogger);

//middleware acesso restrito
// function verificarAcesso (req, res, next) {
//   const  autorizado =  false

//   if (!autorizado) {
//     res.send("Acesso  negado")
//   }

//   next()
// }

// app.get("/", (req, res) => {
//   res.send("rota  página  inicial");
// });

// app.get('/area-restrita', verificarAcesso, (req, res)=>{
//      res.send('Bem vindo  a  área')
// })

app.get('/produto/:nome', (req, res)=> {
  const nome = req.params.nome
  res.send(`produto selecionado : ${nome}`)
})

app.listen(PORT, () => {
  console.log(`Servidor funcionando localmente  em http://localhost:${PORT}`);
});
