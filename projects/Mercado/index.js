const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const mercado_controller = require("./controllers/mercado.js")
const mercado_router = require("./routes/mercado.js")
const fornecedor_router = require("./routes/fornecedor.js")
const produto_router = require("./routes/produto.js")
const app = express();
const port = 9900

app.use(express.json())

app.use("/mercado", mercado_router)

app.use("/fornecedor", fornecedor_router)

app.use("/produto", produto_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})