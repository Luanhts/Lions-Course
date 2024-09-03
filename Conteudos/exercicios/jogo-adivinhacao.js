let aleatorio = Math.floor(Math.random() * 20 + 1);

let tentativa = 1;
let maxTent = 10;
let numeroAtualizado = false;

console.log("-".repeat(17))
console.log("Digite um número ")
console.log("-".repeat(17))

process.stdin.on("data", function(data) {
    let entrada = Number(data.toString().trim());
    if (entrada === aleatorio) {
        console.log("-".repeat(25))
        console.log("Você acertou o número!!!")
        console.log("-".repeat(25))
        console.log(`Número digitado: ( ${entrada} )\n\nNúmero sorteado: ( ${aleatorio} ) , você tentou ( ${tentativa} ) vezes`)
        console.log("-".repeat(25))
        process.exit();
    } else if (isNaN(entrada)) {
        console.log(`O valor inserido é inválido digite um número: `)
    } else if (tentativa === maxTent) {
        console.log(`Você atingiu o limite de tentativas, suas tentativas: ( ${tentativa} ), o número sorteado era ( ${aleatorio} )`)
        process.exit();
    } else if (tentativa === 5 && !numeroAtualizado) {
        console.log(`Como você errou 5 vezes, mudamos seu número, seu número era ${aleatorio}...`)
        aleatorio = Math.floor(Math.random() * 20 + 1); 
        numeroAtualizado = true; 
    } else {
        let diferenca = Math.abs(entrada - aleatorio);
        let proximidade = diferenca > 3 ? "frio" : "quente";

        let total = maxTent - tentativa;
        console.log(`Você errou, está ${proximidade} \n(${total}) tentativas restantes, tente novamente: `);
        tentativa++;
    }
})