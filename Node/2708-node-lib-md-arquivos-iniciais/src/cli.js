#!/usr/bin/env node

import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {
    if (valida) {
        console.log(chalk.yellow('Lista Validada'),
            chalk.black.bgGreen(identificador),
            await listaValidada(resultado));
    } else {
        console.log(chalk.yellow('Lista de links'),
            chalk.black.bgGreen(identificador),
            resultado);
    }

}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    //Ao declarar valida da seguinte forma, seu valor é True ou False
    const valida = argumentos[3] === 'valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log(chalk.red('Arquivo ou diretório não existe.'));
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
            imprimeLista(valida, lista, nomeDoArquivo);
        });
    }
}

processaTexto(caminho);