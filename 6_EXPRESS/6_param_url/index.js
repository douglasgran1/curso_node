const express = require('express')
const app = express()
const port= 3000 // variável ambiente

const path = require('path')

const basepath = path.join(__dirname, 'templates')


  app.get('/users/:id', (req, res) => {

    const id = req.params.id
  
    //leitura da tabela users, resgatar um usuario do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
  
    res.sendFile(`${basepath}/users.html`)
  
  })

app.get('/', (req, res) => {

  res.sendFile(`${basepath}/index.html`)

})

app.listen(port, () => {

  console.log(`App rodando na porta ${port}`)

})