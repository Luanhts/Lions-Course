const prompt = require('prompt-sync')();

const { menu, criar, listar, atualizar, remover } = require('./pets')

while(true){
menu();
const option = parseInt(prompt("Selecione uma opção: "))
    switch(option){
        case 1: 
            criar();
            break;

        case 2:
            listar();
            break;
        case 3:
            atualizar();
            break;
        case 4:
            remover();
            break;
        case 5:
            process.exit();
            break;
        default:
            console.log("Opção inválida: ")
            break;
    }

}