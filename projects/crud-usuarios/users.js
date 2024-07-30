const prompt = require("prompt-sync")();

const usuarios = []

let finalId = 0

const emailNaoDuplicado = email => {
    return usuarios.find()
} 

const modelo = (id = ++finalId) => {

    const nome = prompt("Digite um nome de usuário: ")
    const email = prompt("Digite o e-mail desse usuário: ")
const telefones = [];
    while(true) {
        const telefone = prompt("Digite um número de telefone do usuário ou S para sair: ")
        if (telefone == "s") {
            break;
        }
        telefones.push(telefone);
    }
    if(emailNaoDuplicado(email)) {
        
        return {
            nome,
            email,
            telefones,
            id,
        }
    }else{
        console.log("Falha na operação")
    }


    const criar = () => {
        const novo = modelo();

        if(novo != undefined){
            usuarios.push(novo);
            console.log("Usuário criado com sucesso: ")
        }
    }
};

const listar = () => {
    usuarios.forEach(usuario => {
        console.log(`
        Id: ${usuario.id}
        Nome: ${usuario.nome}
        Email: ${usuario.email}`)

        usuario.telefone.forEach((telefone, indice) => {
            console.log(`Telefone ${indice + 1}: ${telefone}`);
        }); 
    });
    return true;

}
    const atualizar = () =>{
        if(listar()) {
            const id = prompt("Qual o id que deseja atualizar: ")

            const novo = modelo(id)

            const indice = usuarios.findIndex(usuario => id == usuario.id)

            if(indice != -1){
                usuarios[indice] = novo
            } else {
                console.log("Id inexistente")
            }
        }
    }

    const remover = () => {
        if(listar()) {
            const id = prompt("Qual o id que remover: ")

            const indice = usuarios.findIndex(usuario => id == usuario.id)
        }
    }
