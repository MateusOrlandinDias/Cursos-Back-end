import fs from 'fs';
import chalk from 'chalk';

 async function extraiLinks (texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    /*
        O matchAll retorna um iteravel (qua não mostra o conteudo)... Quando temos algo do tipo, é possivel
        utilizar o spread operator [...texto.matchAll(regex)] para espalhar essas iterações em um array.
    */
    const capturas = [...texto.matchAll(regex)];
    /*
        Notar que o captura[1] foi englobado por [] => [captura[1]] => Englobar por colchetes quando a chave de um objeto é um elemento de um array
        Notar que o {} foi englobado por (), isso pois as chaves não se referiam a abertura de uma função, mas sim a abertura de um objeto. 
    */
    const resultado = capturas.map(captura => ({[captura[1]] : captura[2]}));
    return resultado.length !==0 ? resultado : 'Não há links no arquivo';
}

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

//async/ await
/*
Assync se usa na declaração da função para dizer que ela é assincrona e deve esperar para retornar resultado pois
ainda existem itens pendentes de processamento.

Await é usado nos trechos de código em que temos um item pendente de processamento e que precisamos esperar sua 
execução para continuar o código.
*/
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch(erro){
        trataErro(erro);
    }
}

export default pegaArquivo;