console.log("Digite o ano de seu nascimento: ")

process.stdin.on("data", function(data){
    let ano = (data.toString().trim());
    let resultado = 2024 - ano;

    process.stdout.write("Você tem " + resultado + " Anos\n");
    process.exit();
})