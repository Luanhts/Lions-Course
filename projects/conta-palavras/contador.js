
var prompt = require('prompt-sync')();


function contarPalavras(texto) {
    // Remover pontuações e caracteres especiais, e converter para minúsculas
    texto = texto.toLowerCase().replace(/[^\w\s]/g, "");

    // Dividir o texto em palavras
    const palavras = texto.split(/\s+/);

    // Criar um objeto para armazenar a contagem de cada palavra
    const contagem = {};

    // Iterar sobre cada palavra e contar sua ocorrência
    palavras.forEach(palavra => {
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    });

    return contagem;
}


const texto = prompt("Digite a história ou texto:");
const resultado = contarPalavras(texto);

console.log("Contagem de palavras:");
for (let palavra in resultado) {
    console.log(`${palavra}: ${resultado[palavra]}`);
}
