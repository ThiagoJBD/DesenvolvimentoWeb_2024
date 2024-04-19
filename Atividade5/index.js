const express = require('express');
const estoque = require('./util/estoque');
const app = express();

app.get('/adicionar/:id/:nome/:qtd', function(req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criar_produto(id, nome, qtd);
    estoque.adicionar(p);
    res.send(p);
});

app.get('/listar', function(req, res) {
    res.send(estoque.listar());
});

app.get('/remover/:id', function(req, res) {
    let id = req.params.id;
    estoque.remover(id);
    res.send(id);
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log("Aplicação Web rodando na porta: " + PORT);
});