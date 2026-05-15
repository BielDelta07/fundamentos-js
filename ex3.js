const prompt = require("prompt-sync")();

let nota_final = Number(prompt("Digite a sua nota final: "));

if(nota_final >= 7){
    console.log("Você está aprovado ;)");
}else{
    console.log("Você está reprovado :(");
}
