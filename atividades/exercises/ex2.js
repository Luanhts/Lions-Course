// Existem 13 erros neste script, encontre e corrija

let dia = true //Erro 1: const não pode alterar seu valor //

if(dia) {
    console.log("Bom dia");
} else{ //Erro 2: Else não recebe parametro
                //Erro 3: Não abriu chaves {
    console.log("Boa noite");
}

dia = false;

let aluno = { //Erro 4: não coloco = 
    frio: true, //Erro 5: não usou :
    molhado: true, //Erro 6: não usou :
}

if(aluno.molhado && aluno.frio && !dia) { //Erro 7: não fecho chaves} //Erro 8: não usou && duas vezes pra fazer e // Erro9: Mesmo que o 8
    console.log("Vou usar um casaco");

    let casacos = ["casaco1", "casaco2", "casaco3"]; //10: Não usou , para separa os valores//11: não usou , //12 não usou ,
    
    for (let i = 0; i < casacos.length; i++) { //Erro13: o i teria que ser 0, para começar do inicio e só i < casacos para assim ele trasnmitir certo
        console.log("Ponha " + casacos[i] + " tira " + casacos[i]);
        
    }

}

