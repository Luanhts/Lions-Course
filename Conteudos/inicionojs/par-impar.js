console.log("Digite um número: ")

process.stdin.on("data", function(data){
   // let num = "";
    let num = (data.toString().trim());
    let resultado = num % 2 == 0;

    if (resultado){
        console.log("par")
    }else{
        console.log("Impar")
    }
    process.exit();
})
