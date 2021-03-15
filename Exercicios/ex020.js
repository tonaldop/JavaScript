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

console.log('A ordem de apresentação será: ')
console.log(arrayAlunos.sort()) // ordem crescente
console.log(arrayAlunos.reverse()) // onde descrescente