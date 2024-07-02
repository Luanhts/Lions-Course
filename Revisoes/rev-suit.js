console.log("Digite um número da semana: ")

process.stdin.on("data", function(data){
    user = Number(data.toString().trim())

    switch (user) {
        case 1:
            console.log("É segunda")
            process.exit()
        case 2:
            console.log("É terça")
            process.exit()

        case 3:
            console.log("É quarta")
            process.exit()

        case 4:
            console.log("É quinta")
            process.exit()

        case 5:
            console.log("É Sexta")
            process.exit()

        case 6:
            console.log("É Sábado")
            process.exit()

        case 7:
            console.log("É domingo")
            process.exit()

        default:
            console.log("Valor inválido: ")
            break;
    }
})