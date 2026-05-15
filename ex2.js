const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número inteiro qualquer: "));

if(numero > 0){
    console.log("O número digitado é positivo.");
}else if(numero === 0){
    console.log("O número digitado é igual a zero.");
}else{
    console.log("O número digitado é negativo.");
}