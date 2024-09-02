const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Salveee");
});

app.listen(3333, () => {
    console.log(`Seu server iniciou na porta http://localhost:3333`)
})