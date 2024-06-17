let hobbies = []
let i = true

console.log("Digite seu hobbie: ");
while(i == true){
process.stdin.on("data", function(data){
    if(!hobbies.push){
        hobbies.push = data.toString().trim()
        console.log(hobbies)
        console.log("Digite mais um hobiie ou [S]: ")
}else if(hobbies == "S"){
    console.log("Saiu...")
    i = false;
}
})}

/*}else if(!hobbies.idade){
        hobbies.idade = data.toString().trim()
        console.log("Você tem cnh: ")
    }else if(!hobbies.cnh){
        hobbies.cnh = data.toString().trim()
        console.log(hobbies)
    } 
    
    else if(hobbies.cnh == "sim"){
        console.log("Seus hobbies:" + hobbies + "Você pode dirigir \n")
    } else{
        console.log("Não pode dirigir: ")
        process.exit();
    
    
}})*/