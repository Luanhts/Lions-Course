const prompt = require("prompt-sync")();

const { criar, atualizar, remover, ler } = require("./teste-funcs.js");

while (true) {
  console.log('-'.repeat(25))
  console.log("Digite uma opção: ")
  console.log('-'.repeat(25))
  console.log(
    `1. Criar 
    2. Atualizar 
    3. Remover 
    4. Listar 
    5. Sair`
  );
  let opcao = Number(prompt());

  switch (opcao) {
    case 1:
      criar();
      break;
    case 2:
      atualizar();
      break;
    case 3:
      remover();
      break;
    case 4:
      ler();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}