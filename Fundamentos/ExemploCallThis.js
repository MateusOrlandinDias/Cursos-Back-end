const cliente = {
    nome: "Mateus",
    idade: 20,
    servidores: [{
        local: "SP",
        dados: 32
    },
    {
        local: "RJ",
        dados:22
    }],

    sites: ["UOL","JS-MASTER"],
    
    imprimeDado: function(){
        console.log(this.nome);
    }
}

const empresa = {
    nome: "Meta IT",
}

// cliente.imprimeDado();
//VV FUNCIONAMENTO DO THIS PEGANDO UMA FUNÇÃO DE UM OBJETO E USANDO EM OUTRO VV
// cliente.imprimeDado.call(empresa);

//VV FOR IN VV
// for(let info in cliente){
//     if(typeof cliente[info]==="object" || typeof cliente[info]==="function"){ continue; }
//     else{
//         console.log(`
//             ${info} ==> ${cliente[info]}
//         `);
//     }
// }