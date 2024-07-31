const prompt = require('prompt-sync')();

const agendamentos = [];

const menu = () => {
    console.log("-".repeat(20))
    console.log("Bem vindo ao PetSHop")
    console.log("-".repeat(20))
    console.log(`
    1. Criar atendimento
    2. Listar atendimentos 
    3. Atualizar atendimentos 
    4. Remover atendimentos
    5. Sair`)
}

const modelo = () => {
    const raca = prompt("Digite a raça do pet: ")
    const nome = prompt("Digite o nome do pet: ")
    const peso = parseFloat(prompt("Digite o peso do pet: "))
    const servico = prompt("Digite o servico a ser realizado: ")

    if (raca !== "" && nome !== "" && servico !== "" && !isNaN(peso)){
        return {
            raca, 
            nome,
            peso,
            servico
        };
    } else{
        console.log("Digite um valor válido: ")
        return undefined;
    }
}

const criar = () => {
    const pet = modelo();
    if (pet !== undefined){
        agendamentos.push(pet);
        console.log("Seu pet foi adicionado com sucesso: ")
        listar();
    }
}

const listar = () => {
    if(agendamentos.length == 0) {
        console.log("Não possui nenhum agendamento: ")
    }
    console.log("Seus pets: ");

    agendamentos.forEach((pet, indice) => {
    console.log(`${indice + 1}. Raca: ${pet.raca} Nome: ${pet.nome} Peso: ${pet.peso} KG Serviço a ser realizado: ${pet.servico}`);
    });
};

const atualizar = () => {
    const index = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;
    const raca = prompt("Digite a raça do pet: ")
    const nome = prompt("Digite o nome do pet: ")
    const peso = parseFloat(prompt("Digite o peso do pet: "))
    const servico = prompt("Digite o servico a ser realizado: ")
    
    const pet = {
        raca, 
        nome,
        peso,
        servico
    };
    if(pet !== undefined){
        agendamentos[index] = pet;
        console.log("Aluno atualizado com sucesso: ")
        listar();
    }else {
        console.log("Falha ao atualizar: ")
    }
}

const remover = () => {
        listar();
        const indice = parseInt(prompt("Qual indice deseja remover: "), 10) -1;
        agendamentos.splice(indice, 1);
        console.log("Pet removido: ");
        listar();
    }


module.exports = { menu, criar, listar, atualizar, remover }