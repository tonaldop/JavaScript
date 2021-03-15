// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const arrayAlunos = []

let aluno = inputt('Primeiro aluno: ')
arrayAlunos.push(aluno)

aluno = inputt('Segundo aluno: ')
arrayAlunos.push(aluno)

aluno = inputt('Terceiro aluno: ')
arrayAlunos.push(aluno)

aluno = inputt('Quarto aluno: ')
arrayAlunos.push(aluno)

const escolhaAluno = Math.floor(Math.random() * 4) // Gerando um número aleatorio

console.log(`O aluno escolhido foi ${arrayAlunos[escolhaAluno]}`)
