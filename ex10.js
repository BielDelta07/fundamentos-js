const prompt = require("prompt-sync")();

const login_correto = "admin";
const senha_correta = "1234";

let login = prompt("Login: ");
let senha = prompt("Senha: ");

if(login === login_correto && senha === senha_correta){
    console.log("Sucesso! Os dados informados estão corretos!");
}else{
    console.log("O login ou a senha estão incorretos. Tente novamente.");
}
