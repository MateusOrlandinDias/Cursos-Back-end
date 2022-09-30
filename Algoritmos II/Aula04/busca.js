//Caso minha função recursiva não tenha uma condição de saída eu tenho um stack overflow para evitar loop infinito
const listaLivros = require('./arrayOrdenada');

function busca(array, de, ate, valorBuscado){
    const meio = Math.round((de+ate)/2);
    const atual = array[meio];

    if(de > ate){//evitando erro de stack overflow
        return -1;//geralmente se retorna -1 para erros - convenção.
    }

    if(valorBuscado === atual.preco){
        return meio;
    }

    if(valorBuscado < atual.preco){
        return busca(array, 0, meio-1, valorBuscado);
    }

    if(valorBuscado > atual.preco){
        return busca(array, meio+1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length-1, 36));