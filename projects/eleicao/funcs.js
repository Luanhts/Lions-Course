const prompt = require("prompt-sync")();

const usuarios = [];

const modelo = () => {
    let usuario = {
        nome: undefined,
        voto: [],
    };

    usuario.nome = prompt("Qual seu nome? ");

    while (true) {
        let pergunta = prompt("Em quem você quer votar? ");

    if (pergunta === 5) break;

    usuario.voto.push(pergunta);
    /* if(voto.length() >= 2){
        console.log("Você só pode votar uma vez: ")
    } */
}

    return usuario;
};

const registrar = () => {
    let user = modelo();

    usuarios.push(user);

    console.log("Usuário registrado: ");
};

const listar = () => {
    atividades.forEach((usuario, indice) => {
        console.log(`${indice + 1}. ${usuario.dia}: `);
        atividade.descricao.forEach((descricao) => console.log(`- ${descricao}`));
    });
};

const atualizar = () => {
    listar();

    let indice = prompt("Qual indice deseja atualizar? ");

    let usuario = modelo();

    usuarios[--indice] = usuario;

    console.log("Atualizado");
};

const remover = () => {
    listar();

    let indice = prompt("Qual indice sera removido? ");

    usuarios.splice(--indice, 1);

    console.log("Removido");
};

module.exports = {
    registrar,
    atualizar,
    remover,
    listar,
};