console.log("Digite (C) para Celsius e (F) para Fahrenheit: ");

// Função para tratar entrada de dados dependendo da opção escolhida
function handleInput(option) {
    console.log(`Digite o valor em ${option === 'C' ? 'Celsius' : 'Fahrenheit'} a ser convertido:`);
    
    process.stdin.once("data", function(data) {
        let num = parseFloat(data);
        if (isNaN(num)) {
            console.log("Valor inválido. Por favor, insira um número válido.");
            handleInput(option); // Chama a função novamente para nova entrada
            return;
        }

        switch (option) {
            case "C":
                let result = (num * 1.8) + 32;
                console.log(`O valor em Fahrenheit é: ${result}`);
                process.exit();
                break;

            case "F":
                let res = (num - 32) / 1.8;
                console.log(`O valor em Celsius é: ${res}`);
                process.exit();
                break;
        }
    });
}

// Função para lidar com a escolha da opção
process.stdin.once("data", function(data) {
    let user = data.toString().trim().toUpperCase();

    switch (user) {
        case "C":
            handleInput("C");
            break;

        case "F":
            handleInput("F");
            break;

        default:
            console.log("Opção inválida");
            process.exit();
    }
});

