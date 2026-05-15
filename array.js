const prompt = require("prompt-sync")();

let nomes = []; //Cria um array vazio

for(let i = 0; i < 3; i++){
    let nome = prompt("Digite o nome: ");
    //Pede para o usuário digitar um nome
    nomes.push(nome);
    //Salva o nome no vetor nomes através da função push
}

console.log("Nomes cadastrados: ");

// percorre o array de nomes posição por posição
for(let i = 0; i < nomes.lenght; i++){
    console.log(nomes[i]);
}
