const livrosProg = require('./listaLivros.js');
const maisBarato = require('./menorValor.js');

for (let atual = 0; atual < livrosProg.length; atual++) {
    let menor = maisBarato(livrosProg, atual);

    console.log('pos atual: '+atual);
    let livroAtual = livrosProg[atual];
    console.log('Livro Atual: ',livroAtual);
    let livroMaisBarato = livrosProg[menor];
    console.log('Livro mais barato: ',livroMaisBarato);

    //trocando a posição
    livrosProg[atual] = livroMaisBarato;
    livrosProg[menor] = livroAtual;
}

console.log(livrosProg);//OK, funciona