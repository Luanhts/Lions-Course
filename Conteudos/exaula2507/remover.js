const alunos = [
    {
    nomeAluno : "Edson",
    dataNascimento : 1988,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 1",
    dataNascimento : 2010,
    curso: "dev",
    periodo : "noite",
    },
    {
    nomeAluno : "Aluno 2",
    dataNascimento : 1999,
    curso: "dev",
    periodo : "tarde",
    },
    ];

    const remover = () => {
        const indice =
        parseInt(prompt("Qual indice você deseja remover? "), 10) - 1;
        alunos.splice(aluno);
        console.log("Jogo removido com sucesso");
        console.log(alunos);
        };