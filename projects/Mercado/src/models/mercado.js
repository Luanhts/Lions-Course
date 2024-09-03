let nextId = 1;

const model = (body, id = nextId++) => {
    if (body.nome != "" && body.nome != undefined){
        return {
            id,
            nome: body.nome,
            endereco: body.endereco 
        }
    }
}

module.exports = model