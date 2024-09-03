let nextId = 1;

const model = (body, id = nextId++) => {
    if (body.nome != "" && body.nome != undefined){
        return {
            id,
            nome: body.nome
        }
    }
}

module.exports = model