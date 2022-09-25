//algoritmo que percorre dois arrays diferentes e ordena em um só array em ordem de preço
//ALGORITMO QUE MISTURA 2 LISTAS JÁ ORDENADAS
const { edFolha, edGalho } = require('./arrays');

function juntaListas(Lista1, Lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while (posicaoAtualLista1 < Lista1.length && posicaoAtualLista2 < Lista2.length) {
        if (Lista1[posicaoAtualLista1].preco < Lista2[posicaoAtualLista2].preco) {
            listaFinal[atual] = Lista1[posicaoAtualLista1];
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = Lista2[posicaoAtualLista2];
            posicaoAtualLista2++;
        }

        atual++;
    }

    while (posicaoAtualLista1 < Lista1.length) {
        listaFinal[atual] = Lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }

    while (posicaoAtualLista2 < Lista2.length) {
        listaFinal[atual] = Lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));