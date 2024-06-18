let infos = [];
let dados = {
    nome: "",
    idade: "",
};

console.log("Digite seus dados: ");

process.stdin.on("data", function(data) {
    let entrada = data.toString().trim(); // Correção: declarar 'entrada' com 'let'
    if (!dados.nome) {
        dados.nome = entrada;
        console.log("Digite sua idade: ");
    } else if (!dados.idade) {
        dados.idade = entrada; // Correção: usar 'entrada' em vez de 'data.toString().trim()'
        if (dados.idade < 18) {
            console.log("Seus dados: " + dados.nome + ", " + dados.idade + " anos - você é menor de idade, Bem Vindo!!!");
            process.exit();
        } else {
            console.log("Seus dados: " + dados.nome + ", " + dados.idade + " anos - você é maior de idade, Salve TMJ!!!");
            process.exit();
        }
    }
});
