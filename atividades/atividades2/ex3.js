console.log("Digite um número: ")

process.stdin.on("data", function(data){
    let num = Number(data.toString().trim())

    if(num <= 1 || num % 2 == 0){
        console.log(`Você digitou: ${num} ele NÂO É PRIMO `)
        process.exit();
    }else{
        console.log(`Você digitou ${num} ele é PRIMO!!!`)
        process.exit();
    }
});