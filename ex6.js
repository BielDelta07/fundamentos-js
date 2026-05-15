const prompt = require("prompt-sync")();

let soma = 0;

for(let i = 1; i <= 100; i++){
    soma = soma + i;
    console.log("Resultado: " + soma);
}
console.log("A soma de todos os números de 1 até 100 é: " + soma);
