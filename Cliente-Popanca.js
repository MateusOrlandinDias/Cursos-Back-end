//Antigo cliente-generico
function Cliente (nome, telefone, estado, saldo){
    this.nome=nome;
    this.telefone=telefone;
    this.estado=estado;
    this.saldo=saldo;
    this.addSaldo = function(valor){
        this.saldo += valor;
    }
}

//Teste incluir o cliente generico por import e export

//Novo cliente poupança
function ClientePoupanca (nome, telefone, estado, saldo, saldoPoup){
    Cliente.call(this,nome,telefone,estado,saldo);
    this.saldoPoup = saldoPoup;
}

//criando novo cliente poupanca
const orlandin = new ClientePoupanca('Orlandin', '51 89237129', 'SP', 200, 150);

//teste cliente poupanca
// console.log(orlandin);//OK, funciona

//teste addSaldo normal
// orlandin.addSaldo(100);
// console.log(orlandin);//OK, funciona

//Adicionando novo método para add dinheiro na poupança
//poderia ter sido criado dentro do construtor também
ClientePoupanca.prototype.addSaldoPoup = function(valor){
    this.saldoPoup += valor;
}

//Teste addSaldoPoup
// orlandin.addSaldoPoup(30);
// console.log(orlandin.saldoPoup);//OK, funciona

//Teste de um cliente generico tentando usar metodos de um clientepoup
const mateus = new Cliente('Mateus', '51 99924387', 'RS', 300);//passando os parametros do novo cliente
// mateus.addSaldoPoup(2);//NÃO FUNCIONA (É RESTRITO)