console.log("-".repeat(20))
console.log("Bem vindo ao conversor de Temperatura!!!")
console.log("-".repeat(20))
console.log("\nDigite (C) para celsius e (F) para Farenheit: ")

process.stdin.on("data", function(data){
let user = data.toString().trim().toUpperCase();
    if(user == "C"){
        console.log("=".repeat(45))
        console.log("Digite o valor: ")
            process.stdin.on("data", function(data){
                let num = Number(data.toString().trim());
                let result = num * 1.8 + 32;
                console.log(`O valor ${num} Graus Celsius para Farenheit é : ${result}`)
                console.log("=".repeat(45))
                process.exit();
            });
    }
    else if(user == "F"){
        console.log("=".repeat(45))
        console.log("Digite o valor: ")
            process.stdin.on("data", function(data){
                let num = Number(data.toString().trim());
                let result = (num - 32)/1.8;
                console.log(`O valor ${num} Graus Farenheit para Celsius é : ${result}`)
                console.log("=".repeat(45))
                process.exit();
            });
        }       
});