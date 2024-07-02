var prompt = require('prompt-sync')();

var notas = [];

var quant = prompt("Digite quantas notas são: ")

for(let i = 1;i <= quant;i++){
    var user = parseFloat(prompt("Digite suas notas: "))
    notas.push(user)
}

function media(notas){
    let soma = 0;

    for(let i = 0; i < notas.length; i++){
        soma += notas[i];
    }
        return soma / notas.length;
}
console.log("A média das notas é: " ,media(notas));