const chalk = require("chalk")
const inquirer = require('inquirer')

inquirer.prompt([{
  name: 'nome',
  message: 'Qual o seu nome?',
}, {
    name: 'idade',
    message: 'Qual sua idade?',
},
]).then((answers) => {

  if(!answers.nome || !answers.idade) {
    throw new Error("O nome e a senha são obrigatorios!")
  }

  const response = `O nome do usuario é ${answers.nome} e ele tem ${answers.idade} anos`
  console.log(chalk.bgYellow.black(response))
})
.catch(err => console.log(chalk.red.bold(err)))