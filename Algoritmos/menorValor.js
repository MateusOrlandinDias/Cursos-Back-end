function menorValor(arrProdutos, posInicial) {
    let maisBarato = posInicial;

    for (let pos = posInicial; pos < arrProdutos.length; pos++) {
        if (arrProdutos[pos].preco < arrProdutos[maisBarato].preco) {
            maisBarato = pos;
        }
    }

    return maisBarato;
}

module.exports = menorValor;