console.log("digite um número: ")

var nums = [];

process.stdin.on("data", function(data){
    let valor = Number(data.toString().trim())
    
    nums.push(valor)
    let soma = 0;
    
    for (let i=0;i < nums.length; i++) {
        soma = soma + nums[i]  
        }

        console.log("media: " + soma / nums.length)
    })
