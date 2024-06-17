let result = 1
console.log("Digite um valor: ")

process.stdin.on("data", function(data){
    let user = Number(data.toString().trim())

    for (let i = 2; i <= user; i++) {
        result *= i;
    }
    console.log(`O fatorial do número: ${user} é ${result}`)
    process.exit()
}) 


