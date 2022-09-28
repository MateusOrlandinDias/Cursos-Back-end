/*
Pincipios do Quick Sort

Primeiro passo - Posicionar o pivo
Segundo passo - Passar os elementos menores que o pivô para a sua esqueda
*/
const array = require('./arrays');

function encontraMenores (pivo, array){
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];
        if(produtoAtual.preco < pivo.preco){
            menores++;
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}

function trocaLugar(array, de, para){
    let elem1 = array[de];
    let elem2 = array[para];

    array[de] = elem2;
    array[para] = elem1;
}

function divideNoPivo(array){
    const pivo = array[Math.floor(array.length/2)];
    encontraMenores(pivo, array);
    let valoresMenores=0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if(atual.preco < pivo.preco){
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}

// console.log(divideNoPivo(array));

module.exports = trocaLugar;