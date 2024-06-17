
var dado = {
    nome: "",
    idade: "",
    salario: "",
    sexo: "",
    estadS: ""
};
    console.log("Digite seu nome: ")
process.stdin.on("data", function(data){
    data = data.toString().trim();

    if(!dado.nome){
        dado.nome = data;
        if (dado.nome.length < 3) {
            console.log("O nome deve conter mais de 3 caracteres: ")
            dado.nome = "";
        } else {
            console.log("Insira sua Idade: ");
        }
    } else if(!dado.idade){
        dado.idade = Number.data.toString().trim();
        if(dado.idade === 0 || dado.idade > 150 || isNaN(pessoa.idade)) {
            console.log("Digite uma idade válida: ");
            dado.idade = "";
        }else{
            console.log("Digite seu salário: ")
        }
    } else if(!dado.salario){

    }
})

