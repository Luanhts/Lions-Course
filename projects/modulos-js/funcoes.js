function circulo(r){
    let rQuad = Math.pow(r, 2)
    return rQuad * Math.PI
}

function triangulo(b, h){
    return (b * h)/2
}

function retangulo(b, h){
    return b * h
}

module.exports = circulo