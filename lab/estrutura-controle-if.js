const nota = 6
const num = 7
const media = 6
// if simples
if (nota >= 7) {
    console.log('Parabéns, você passou!')
}

// if composto
if (num > 7) {
    console.log('A nota é maior do que 7')
} else {
    console.log('A nota é menor do que 7')
}

// if aninhado
if (media <= 4) {
    console.log('Aluno(A) REPROVADO!')
} else if (media > 4 && media <= 5) {
    console.log('Aluno(a) em RECUPERAÇÃO!')
} else {
    console.log('Aluno(a) APROVADO!')
}