// npm init -y (inicia o node)
// npm i node prompt-sync (sincroniza as packages e bibliotecas do node)


//importa a bibliotexa prompt sync para permitir a entrada de dados no teclado
const prompt = require("prompt-sync")();

//Cria a variável idade e converte o valor digitado para número
let idade = Number(prompt("Digite sua idade: "));

//Cria a váriavel nome e guarda o nome digitado para nome. O valor é digitado pelo usuário
let nome = prompt("Digite seu nome: ");

if(idade >= 18){
    console.log(nome + ", você é maior de idade.");
}else{
    console.log(nome + ", você é menor de idade.");
}

