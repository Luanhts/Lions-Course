const listaCompras = ["banana", "maca", "batata", "tomate"];
let pergunta = "";
console.log("Veja se seu item está na lista: ");

process.stdin.on("data", function(data){
    pergunta = data.toString().trim()

    if(listaCompras.includes(pergunta)){
        console.log(pergunta + " está dentro da Lista!!! \n")
    }else {
        console.log(pergunta + " Não está dentro da lista :( \n")
    }
    process.exit();
})
