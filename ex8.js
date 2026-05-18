const prompt = require("prompt-sync")();

nomes = [];

for(let i = 0; i < 3; i++){
    nome = prompt("Digite um nome: ");
    nomes.push(nome);
}

for(let i = 0; i < 3; i++){
    console.log(nomes[i]);
}
