/* let nums = [];

console.log("Digite um valor: ");

process.stdin.on("data", function(data) {
    let num = Number(data.toString().trim());
    
    nums.push(num);

    if (nums.length < 3) {
        console.log("Digite outro valor:");
    } else {
        console.log(nums);
        process.exit();
    }
});
 */
let nums = [];

console.log("Digite um valor: ");

process.stdin.on("data", function(data) {
    let num = Number(data.toString().trim());
    
    nums.push(num);

    if (nums.length < 3) {
        console.log("Digite outro valor: ");
    } else {
        console.log("Valores digitados: ", nums);
        let maiorValor = Math.max(...nums);
        console.log(`Maior valor digitado: ${maiorValor}`);
        process.exit(); 
    }
});
