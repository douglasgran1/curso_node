const express = require("express")

const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

  const user = {
    name: "Matheus",
    surname: "Battisti",
    age: "30"
  }

  const palavras = "Teste"

  res.render('home', {user: user, palavras})
})

app.listen(3000, () => {
  console.log('App funcionando');
})