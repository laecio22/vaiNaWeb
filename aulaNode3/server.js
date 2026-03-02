const  express = require('express')
const app =  express()

app.use(express.json())

const PORT = 3000
let  usuarios = [
    {
        id:1,
        nome: 'Jorge',
        idade: 13
    },
     {
        id:2,
        nome: 'Maria',
        idade: 30
    }
]

app.get('/usuarios', (req, res)=>{
  res.status(200).json(usuarios)
})

app.post('/usuarios', (req, res) => {
   const {nome, idade} = req.body
   const  novoUsuario = {
    id:usuarios.length + 1,
    nome,
    idade
   }

   usuarios.push(novoUsuario)
   res.status(201).json(novoUsuario)
})

app.listen(PORT,  ()=> {
    console.log('Servidor  funcionou')
})