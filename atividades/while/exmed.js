console.log("Digite sua idade (ou 'f' para encerrar): ");

const nums = [];

process.stdin.on("data", function(data) {
    const entrada = data.toString().trim();
    
    if (entrada.toLowerCase() === 'f') {
        if (nums.length > 0) {
            const soma = nums.reduce((acc, num) => acc + num, 0);
            const final = soma / nums.length;

            console.log("Média das idades: " + final);

            if (final <= 19) {
                console.log("A turma é jovem...");
            } else if (final <= 59) {
                console.log("A turma é ADULTA...");
            } else {
                console.log("A turma é IDOSA");
            }
        } else {
            console.log("Nenhuma idade foi fornecida.");
        }
        process.exit();
    } else {
        const valor = Number(entrada);
        if (!isNaN(valor)) {
            nums.push(valor);
        } else {
            console.log("Valor inválido. Digite uma idade válida ou 'f' para encerrar.");
        }
    }
});
