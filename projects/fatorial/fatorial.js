var prompt = require('prompt-sync')();

var num = prompt('Digite um número: ');
var x = 1

for(let i = 1;i <= num; i++){
    x *= i
}
console.log(`Aqui está a fatorial: ${x}`)