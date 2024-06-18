console.log("-". repeat(35))
console.log("Bem vindo a tabuada!!!")
console.log("-". repeat(35))

console.log("Digite um número: ")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function taboada(x){
    console.log(`A taboada do ${x} é: `)
    for(let i = 1;i <= 10;i++){
        console.log(`${x} x ${x *i}`)
    }
}


readline.question("",(x) => {
    taboada(Number(x));
    readline.close();
})
