let produtos = [];

function criar_produto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionar(p) {
    produtos.push(p);
}

function listar() {
    return produtos;
}

function remover(id) {
    produtos = produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}

module.exports = {
    criar_produto,
    adicionar,
    listar,
    remover
}