const express = require('express')
const app = express()
const port= 3000 // variável ambiente

const path = require("path")

const basepath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {

  req.authStatus = false

  if(req.authStatus) {
    console.log("está logado, pode continuar")
    next()
  } else {
    console.log("não está logado, faça o login para continuar")
    next()
  }

}

app.use(checkAuth)


app.get('/', (req, res) => {

  res.sendFile(`${basepath}/index.html`)

})

app.listen(port, () => {

  console.log(`App rodando na porta ${port}`)

})