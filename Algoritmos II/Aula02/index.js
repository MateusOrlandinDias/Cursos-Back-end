//ALGORITMO QUE DIVIDE UMA LISTA EM PEDAÇOS E ORDENA ESSES PEDAÇOES PARA POSTERIRMENTE SE RECONSTRUIR REORDENANDO
//Merge Sort - Recurção
/**
 Neste código identificamos um método de ordenação de uma lista que é bem mais eficiente do que vimos antes...
 Ele utiliza uma chamada recursiva da função (mergeSort) para ir criando pedaços menores de uma lista até
 que possamos lidar com dois arrays de um elemento cada.

 Após a divisão, o algorítmo chama o método ordena para ordenar o novo pedaço de mini-array por preço.
 */
const listaLivros = require('./arrays');

function mergeSort(array, nivelAninhamento = 0){
    console.log(`Nivel de Aninhamento: ${nivelAninhamento}`);
    console.log(array);
    let contParte1=0;
    let contParte2=0;

    if(array.length>1){
        const meio = Math.floor(array.length/2); //se for numero quebrado arredonda p baixo
        const parte1 = mergeSort(array.slice(0,meio), nivelAninhamento++);//dividir
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento++);//dividir
        parte1.forEach(livro => {
            contParte1++;
        });
        parte2.forEach(livro => {
            contParte2++;
        });
        console.log(`Livros na parte 1: ${contParte1}`);
        console.log(`Livros na parte 2: ${contParte2}`);
        console.log('Reordenando...');
        //com o nosso array dividido em pequenas partes, precisamos ordenar essas partes menores
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco<produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        }else{
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }

    return resultado.concat(posicaoAtualParte1<parte1.length 
        ? parte1.slice(posicaoAtualParte1, parte1.length) 
        : parte2.slice(posicaoAtualParte2, parte2.length));
}

console.log('RESULTADO FINAL:');
console.log(mergeSort(listaLivros));