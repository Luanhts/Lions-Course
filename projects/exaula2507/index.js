const prompt = require("prompt-sync")();

const { menu, modelo, criar, listar, remover, atualizar, contagem } = require("./cadastros")


const main = () => {
    while(true){
        menu(); // Exibe o menu
        let user = parseInt(prompt("Digite uma opção: "), 10); // Obtém a opção do usuário
        switch (user) {
            case 1:
                criar();
                break;
            case 2:
                listar();
                break;
            case 3:
                listar();
                atualizar();
                break;
            case 4:
                listar();
                remover();
                break;
            case 5:
                contagem();
                break;
            case 6:
                console.log("Saindo...");
                process.exit(0); // Encerra o processo com código de saída 0 (sucesso)
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}
    main();
// Executa a função principal
