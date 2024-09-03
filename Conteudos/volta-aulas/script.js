const { prompt, menu, addAct, atualAct, remAct, listAct } = require("./funcs.js");

let atividades = []

console.log("Cadastre o dia e as atividades que você realizou nas férias: ")

let usuario = prompt(menu())

    switch (usuario){
    case 1:
        addAct();
        break;
    case 2: 
        atualAct;
        break;
    case 3:
        remAct();
        break;
    case 4:
        listAct();
    case 5:
        break;
}


/* let dia = prompt("Qual dia foi: ")
let atividades = prompt("Que atividades vc realizou: ") */

