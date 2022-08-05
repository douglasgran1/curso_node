const express = require('express')
const app = express()
const port = 3000 //variavel ambiente

const path = require("path")

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {

  res.sendFile(`${basePath}/userform.html`)

})

app.post('/users/save', (req, res) => {

  // ler o body
  console.log(req.body)

  const name = req.body.name
  const age= req.body.age


  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

  res.sendFile(`${basePath}/userform.html`)
})

const checkAuth = function(req, res, next) {

  req.authStatus = true

  if(req.authStatus) {
    console.log('Está logado, pode continuar')
    next()
  } else {
    console.log("Não está logado, faça o login para continuar")
    next()
  }

}

app.use(checkAuth)

app.get('/users/:id', (req, res) => {
  const id = req.params.id

  // leitura da tabela users

  console.log(`Estamos buscando pelo usuário: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {

  res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

  console.log(`App rodando na porta ${port}`)

})
