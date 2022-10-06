import fs from 'fs';
import chalk from 'chalk';

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
        console.log(chalk.green(texto));
    } catch(erro){
        trataErro(erro);
    }
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto=> console.log(chalk.green(texto))))
//     .catch(trataErro)
// }

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');