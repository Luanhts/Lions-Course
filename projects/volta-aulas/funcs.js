//Funcionalidade de pergunta ao usuário
const prompt = require('prompt-sync')();

//Mostra o menu ao usuário
let menu = function () {
    console.log("-". repeat(15))
    console.log("Digite uma opção")
    console.log("-". repeat(15))
    console.log("1. adicionar atividade: ")
    console.log("2. Atualizar dados: ")
    console.log("3. Excluir atividade: ")
    console.log("4. Listar atividades: ")
    console.log("5. Sair: ")
} 

const addAct = (dia, acao) => {
    const infos = {
        dia: dia,
        acao: acao,
    };
    atividades.push(infos);
    console.log("Sua atividade foi adicionada: ")
}

const atualAct = () => {
    if(atividades.length <= 0){
        console.log("Você não possue nenhuma atividade: ")
    menu();
    }else{
        console.log("Aqui estão as suas atividades: ")
        atividades.forEach((infos, index) => {
            console.log(`${index + 1} Dia: ${infos.dia}, ${infos.acao}`);
        });
        var pergunta = prompt("Digite uma das opções: ", option =>{
            const consultaIndice = parseInt(option) - 1;

            if(consultaIndice < 0 || consultaIndice >= atividades.length || isNaN(consultaIndice)){
                atualAct();
            }

        console.log(`
        1. Dia
        2. Atividade`);

        let opcAlter = prompt("Digite a opção a ser alterada: ")
        
        switch (parseInt(opcao)){
            case 1:
                let user = prompt("Digite o novo dia: ")
                atividades[consultaIndice].dia = user;
                console.log("O dia foi alterado: ")
                menu();
                break;
            case 2:
                let resp = prompt("Digite a nova atividade: ");
                atividades[consultaIndice].acao = resp;
                console.log("A atividade foi alterada: ")
                menu();
        }
        })
    }
}


const remAct = (name) => {
    const indice = atividades.findIndex(infos => indice.name === name)
    if(indice !== -1){
        atividades.splice(indice, 1);
        console.log("Book removed ")
    }else{
        console.log("Book not found ")
    }
}

const listAct = () => {
    if (atividades.length === 0){
    console.log("Você não fez nada: ")
    }else{
        console.log("O que você fez: ")
        atividades.forEach(infos => {
            console.log(`Dia: ${infos.dia}, ${infos.acao}`)
        });
    }
}


//-------------------------EXPORTAÇÃO-------------------------
module.exports = {
    prompt: prompt,
    menu: menu,
    addAct: addAct,
    atualAct: atualAct,
    remAct: remAct,
    listAct: listAct,
};