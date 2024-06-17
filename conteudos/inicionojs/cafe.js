let gostaCafe = "";

console.log("gosta de café: ")

process.stdin.on("data", function(data){
    gostaCafe = data.toString().trim().toLowerCase();
    if(gostaCafe == "sim"){
        console.log("Curte")
    }else{
        console.log("Não curte")
}
process.exit();
})