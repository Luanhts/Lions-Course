console.log("Digite (C) para Celsius, (F) para Fahrenheit ou (K) para Kelvin:");

function handleInput(option) {
    console.log(`Digite o valor em ${option === 'C' ? 'Celsius' : option === 'F' ? 'Fahrenheit' : 'Kelvin'} a ser convertido:`);
    
    process.stdin.once("data", function(data) {
        let num = parseFloat(data);
        if (isNaN(num)) {
            console.log("Valor inválido. Por favor, insira um número válido.");
            handleInput(option); 
            return;
        }

        switch (option) {
            case "C":
                let resultF = (num * 1.8) + 32;
                let resultKToC = num + 273.15;
                console.log(`O valor em Fahrenheit é: ${resultF}`);
                console.log(`O valor em Kelvin é: ${resultKToC}`);
                process.exit();
                break;

            case "F":
                let resultC = (num - 32) / 1.8;
                let resultKToF = (num - 32) / 1.8 + 273.15;
                console.log(`O valor em Celsius é: ${resultC}`);
                console.log(`O valor em Kelvin é: ${resultKToF}`);
                process.exit();
                break;

            case "K":
                let resultCToK = num - 273.15;
                let resultFToK = (num - 273.15) * 1.8 + 32;
                console.log(`O valor em Celsius é: ${resultCToK}`);
                console.log(`O valor em Fahrenheit é: ${resultFToK}`);
                process.exit();
                break;
        }
    });
}

process.stdin.once("data", function(data) {
    let user = data.toString().trim().toUpperCase();

    switch (user) {
        case "C":
            handleInput("C");
            break;

        case "F":
            handleInput("F");
            break;

        case "K":
            handleInput("K");
            break;

        default:
            console.log("Opção inválida");
            process.exit();
    }
});
