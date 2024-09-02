const express = require("express");
const cep_endereco = require("../co")
const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log("midleware2");
    next();
});

app.post("/barbearia", (req, res, next) => {
    console.log("Post barbearia");
    next();
}, cep_endereco, (req, res) => {
    console.log("deu boa")
    res.json(req.body);
})

app.get("/agenda", (req, res) => {
    console.log("Get agenda");
    res.json();
})

app.listen(port, () => {
    console.log(`server running in http://localhost:${port}`)
})