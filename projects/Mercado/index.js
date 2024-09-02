const  express = require("express");
const cep_endereco = require("./src/middlewares/cep_endereco");
const mercado_controller = require("./src/controllers/mercado_controller");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/merc", cep_endereco, (req, res) => {
    res.json(req.body);
})

app.get("/mercado/", (req, res) => {
    res.json(mercado_controller.index())
})

app.get("/mercado/:id", (req,res) =>{
    res.json(mercado_controller.show(req.params.id))
})

app.post("/mercado", (req,res) => {
    const code = mercado_controller.store(req.body)
    res.status(code).json()
})

app.put("/cliente/:id", (req,res) => {
    const code = mercado_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/cliente/:id", (req, res) => {
    mercado_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log(`Iniciou em https://localhost:${port}`)
})