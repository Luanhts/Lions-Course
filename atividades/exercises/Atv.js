var dados = [];

var dado = {
  nome: "",
  idade: "",
  curso: "",
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
    console.log("Qual seu curso: ");
  } else {
    dado.curso = data.toString().trim();
    dados.push(dado);
    console.log("Deseja sair digite (s) ou novo usuario para cadastrar: ");
    
    dado = {};
  }
});
