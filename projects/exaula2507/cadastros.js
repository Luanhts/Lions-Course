const prompt = require("prompt-sync")();

const alunos = []


const menu = () => {
    console.log("-".repeat(20))
    console.log("Cadastro de Alunos")
    console.log("-".repeat(20))

    console.log(`
    1. Criar
    2. Listar
    3. Atualizar
    4. Remover
    5. Verificar quantos são de maior ou de menor
    6. Sair`)
}

const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento = parseInt(prompt("Ano de nascimento(AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");

    if (nomeAluno !== "" && curso !== "" && periodo !== "" && !isNaN(dataNascimento)) {
return {
nomeAluno,
dataNascimento,
curso,
periodo,
};
} else {
console.log("Dados inválidos");
return undefined;
}
};

const criar = () => {
    const aluno = modelo();
    if (aluno !== undefined) {
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso");
    console.log(alunos);
    }
    };
    // como Executar a função

const listar = () => {
        if (alunos.length === 0) {
        console.log("Nenhum aluno encontrado ");
        return false;
        } else {
        alunos.forEach((aluno, indice) => {
        console.log(`
        ${indice + 1}. Nome do Aluno: ${aluno.nomeAluno} , Ano de Nascimento: ${aluno.dataNascimento} , Curso: ${aluno.curso} , Período: ${aluno.periodo}
        `);
        });
        return true;
        }
        };

const remover = () => {
            const indice = parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;
            alunos.splice(indice);
            console.log("Aluno removido com sucesso");
            if(alunos.length == 0){
                console.log("Nenhum aluno cadastrado ")
            }else{
                console.log(alunos);
            }
        };

const atualizar = () => {
            const indice = parseInt(prompt("Qual o indice que deseja atualizar? "), 10) - 1;
            const nomeAluno = prompt("Nome do aluno: ");
            const dataNascimento = parseInt(prompt("Ano de nascimento(AAAA): "), 10);
            const curso = prompt("Descrição do curso: ");
            const periodo = prompt("Qual o período: ");
    
            const aluno = {
                nomeAluno,
                dataNascimento,
                curso,
                periodo,
                };
                if (aluno !== undefined) {
                alunos[indice] = aluno;
                console.log("Aluno atualizado com sucesso");
                console.log(alunos);
                } else {
                console.log("Falha na atualização");
                }
            };

    const contagem = () => {
        const anoAtual = new Date().getFullYear();
        const idade = 18;
        let i = 0;
//----------------------Menor de Idade--------------------------------
        alunos.forEach(alunos => {
            if (anoAtual - alunos.dataNascimento < idade) {
                i++;
            }
        });
        console.log(`Número de alunos menores de ${idade} anos: ${i}`);
//-----------------------Maior de Idade-------------------------------
        alunos.forEach(alunos => {
            if (anoAtual - alunos.dataNascimento > idade) {
                i++;
            }
        });
        console.log(`Número de alunos maiores de ${idade} anos: ${i}`);
    };


//--------------Export Funcs--------------
module.exports = { menu, criar, listar, remover, atualizar, contagem }


