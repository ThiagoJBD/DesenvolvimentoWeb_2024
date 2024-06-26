const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/', function(req, res) {
    res.send('Calculadora - página de início')
});

app.get('/somar/:a/:b', function(req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.somar(a, b);
    res.send("Resultado da soma igual à: "+c);
});

app.get('/subtrair/:a/:b', function(req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.subtrair(a, b);
    res.send("Resultado da subtração igual à: "+c);
});

app.get('/multiplicar/:a/:b', function(req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.multiplicar(a, b);
    res.send("Resultado da multiplicação igual à: "+c);
});

app.get('/dividir/:a/:b', function(req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.dividir(a, b);
    res.send("Resultado da divisão igual à: "+c);
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log("Aplicação Web rodando na porta: " + PORT);
});