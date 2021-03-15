console.log("\033[30m preto. \u001b[0m")
console.log("\033[31m vermelho. \u001b[0m")
console.log("\033[32m verde. \u001b[0m")
console.log("\033[33m amarelo. \u001b[0m")
console.log("\033[34m azul. \u001b[0m")
console.log("\033[35m roxo. \u001b[0m")
console.log("\033[36m azul-claro. \u001b[0m")
console.log('')
console.log("\033[40m preto. \u001b[0m")
console.log("\033[41m fundo vermelho. \u001b[0m")
console.log("\033[42m fundo verde. \u001b[0m")
console.log("\033[43m fundo amarelo. \u001b[0m")
console.log("\033[44m fundo azul. \u001b[0m")
console.log("\033[45m fundo roxo. \u001b[0m")
console.log("\033[46m fundo azul-claro. \u001b[0m")
console.log('')
console.log("\033[90m cinza-escuro. \u001b[0m")
console.log("\033[91m vermelho-claro. \u001b[0m")
console.log("\033[92m verde-claro. \u001b[0m")
console.log("\033[93m amarelo-claro. \u001b[0m")
console.log("\033[94m azul-médio. \u001b[0m")
console.log("\033[95m magneta-claro. \u001b[0m")
console.log("\033[96m cyan-claro. \u001b[0m")
console.log("\033[97m branco. \u001b[0m")
console.log('')
console.log("\033[100m fundo cinza-escuro. \u001b[0m")
console.log("\033[101m fundo vermelho-claro. \u001b[0m")
console.log("\033[102m fundo verde-claro. \u001b[0m")
console.log("\033[103m fundo amarelo-claro. \u001b[0m")
console.log("\033[104m fundo azul-médio. \u001b[0m")
console.log("\033[105m fundo magneta-claro. \u001b[0m")
console.log("\033[106m fundo cyan-claro. \u001b[0m")
console.log("\033[107m fundo branco. \u001b[0m")
console.log('')
console.log('------------------------------------------------------------------------------------------')
// Criando variavel para deixar um pouco mais simples

const red = '\u001b[31m';
const blue = '\u001b[34m';
const teste = '\u001b[34m';
const reset = '\u001b[0m';
console.log(teste + 'Iuri Patrick' + reset)
console.log('------------------------------------------------------------------------------------------')

console.log("\033[1m negrito \u001b[0m")
console.log("\033[7m inverte \u001b[0m")
// console.log("\033[111m cinza-escuro. \u001b[0m")
// console.log("\033[45m\033[7m inverte fundo roxo. \u001b[0m")
// console.log("\033[81m teste. \u001b[0m")

// console.log("\x1b[2m", "\x1b[31m", "\x1b[44m", "Sample Text", "\x1b[0m");
// console.log(nome.toLocaleLowerCase()) // letras em minúsculo
// console.log(nome.toLocaleUpperCase()) // Letras em maiúsculo
// console.log(nome.split())
// console.log(nome.fontcolor('red'))

// var readlineSync = require('readline-sync');
// valor = readlineSync.question('Digite algo: ');
console.log('Press any key to continue.');
process.stdin.once('data', function () {
  continueDoingStuff();
});