let a = 80000
let b = 200000
let i = 0

while(a<b){
    a += a * 0.03
    b += b * 0.015
    i++
}
console.log(i)