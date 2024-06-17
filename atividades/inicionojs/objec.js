var dados = {}

console.log("Digite seu nome: ");

process.stdin.on("data", function(data){
    if(!dados.nome){
        dados.nome = data.toString().trim()
        console.log("Digite sua idade: ")
    }else if(!dados.idade){
        dados.idade = data.toString().trim()
        console.log("Você tem cnh: ")
    }else if(!dados.cnh){
        dados.cnh = data.toString().trim()
        console.log(dados)
    } 
    
    else if(dados.cnh == "sim"){
        console.log("Seus dados:" + dados + "Você pode dirigir \n")
    } else{
        console.log("Não pode dirigir: ")
        process.exit();
    
    
}})