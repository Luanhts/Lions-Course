const prompt = require("prompt-sync")();

const { registrar, atualizar, remover, listar } = require("./funcs.js");

while (true) {
    console.log("-".repeat(15))
    console.log("Menu")
    console.log("-".repeat(15))
    console.log(
    `
    1. Criar
    2. Atualizar
    3. Remover
    4. Listar
    5. Sair
    `
);

let opcao = Number(prompt());

switch (opcao) {
    case 1:
        registrar();
        break;
    case 2:
        atualizar();
        break;
    case 3:
        remover();
        break;
    case 4:
        listar();
        break;
    case 5:
        process.exit();
        break;
    default:
        console.log("Digite uma opção válida");
        break;
    }
}