const prompt = require('prompt-sync')();

const circulo = require('./funcoes');

let user = Number(prompt('Digite o raio: '))
let area = circulo(user)
console.log(area)

