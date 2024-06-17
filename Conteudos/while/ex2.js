var dados = [];

var dado = {
    nome: "",
    idade: "",
    salario: "",
    sexo: "",
    estadS: ""
};

console.log("QUal seu nome: ");

process.stdin.on("data", function (data) {
    if (data.toString().trim() == "s") {
        console.log(dados);
        process.exit();
    } else if (!dado.nome) {
        dado.nome = data.toString().trim();
        console.log("Qual sua idade: ");
    } else if (!dado.idade) {
        dado.idade = data.toString().trim();
        console.log("Qual seu salario: ");
    } 
    else if(!dado.salario) {
        dado.salario = data.toString().trim();
        console.log("Qual seu sexo: ");
    } 
    else if(!dado.estadS) {
        dado.estadS = data.toString().trim();
        console.log("Qual seu Estado Civil: ");
    } 
    else {
        dado.curso = data.toString().trim();
        dados.push(dado);
        console.log("Deseja sair digite (s) ou novo usuario para cadastrar: ");
        dado = {};
    }
    switch (dado) {
        case nome.length > nome:
            
            break;
            
            default:
                break;
            }
        });