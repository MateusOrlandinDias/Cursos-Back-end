//VV Exemplos de destructuring VV

//EX 1 -  Juntando elementos de um array de array para somente um array
// const numPar = [2, 4, 6];
// const numImpar = [1, 3, 5];

// const num = [numPar, numImpar] //R: [[2, 4, 6],[1, 3, 5]]
// const num = [...numPar, ...numImpar] //R: [2, 4, 6, 1, 3, 5]

//EX 2 - SELECIONAR TANTOS ITENS E SEPARAR O RESTO
// const [num1, num2, ...outrosNum] = [1, 2, 3, 4, 5]; //R: 1 2 [3, 4, 5]

//EX 3 - Definir default de uma variavel
// const [nome=Mateus] = []//R: Mateus

//EX 4 - Extend de objeto
// const pessoa = {
//     nome: 'Mateus',
//     idade: 20
// }

// const pessoaComTelefone = { //R: PessoaComTelefone tem todos os atributos de pessoa mais o atributo telefone
//     ...pessoa,
//     telefone: "91283712"
// }