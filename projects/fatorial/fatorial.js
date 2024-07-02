var prompt = require('prompt-sync')();

let user = parseFloat(prompt("Digite um número: "))

function fatora(user){
    let fatorial = 1

    for(let i = 1;i <= user;i++){
        fatorial *= i;
    }
    return fatorial
}

console.log("A fatorial é: ", fatora(user))