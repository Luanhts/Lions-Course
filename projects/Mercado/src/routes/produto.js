const express = require("express");
const router = express.Router()
const produto_controller = require("../controllers/produto.js")

router.get("/", (req, res) => {
    res.json(produto_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(produto_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = produto_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = produto_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    produto_controller.destroy(req.params.id)
    res.json()
})

module.exports = router