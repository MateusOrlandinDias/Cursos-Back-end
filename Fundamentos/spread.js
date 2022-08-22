const clientes = [{
    nome: "Mateus",
    idade: 20,
    servidores: [{
        local: "SP",
        dados: 32
    },
    {
        local: "RJ",
        dados: 22
    }],

    sites: ["UOL", "JS-MASTER"],

    imprimeDado: function () {
        console.log(this.nome);
    }
},
{
    nome: "Mateus",
    idade: 20,
    servidores: [{
        local: "MG",
        dados: 30
    },
    {
        local: "RS",
        dados: 20
    }],

    sites: ["UOL", "JS-MASTER"],

    imprimeDado: function () {
        console.log(this.nome);
    }
}];

//VV espalhando de forma simples VV
const listaEspalhadaServidores = [...clientes[0].servidores, ...clientes[1].servidores];

console.table(listaEspalhadaServidores);