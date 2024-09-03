const express = require("express");
const cep_endereco = require("../middlewares/cep_endereco.js");
const router = express.Router()
const mercado_controller = require("../controllers/mercado.js")

router.get("/", (req, res) => {
    res.json(mercado_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(mercado_controller.show(req.params.id))
})

router.post("/", cep_endereco, (req, res) => {
    const code = mercado_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = mercado_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    mercado_controller.destroy(req.params.id)
    res.json()
})

module.exports = router