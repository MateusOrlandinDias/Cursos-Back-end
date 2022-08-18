//VV EXEMPLO DO CONSTRUTOR VV
function Cliente (nome, telefone, estado, saldo){
    this.nome=nome;
    this.telefone=telefone;
    this.estado=estado;
    this.saldo=saldo;
    this.addSaldo = function(valor){
        this.saldo += valor;
    }
}

//VV CRIANDO UM NOVO CLIENTE VV
const mateus = new Cliente('Mateus', '51 99924387', 'RS', 300);//passando os parametros do novo cliente

console.log(mateus);

//VV ADICIONANDO SALDO VV
mateus.addSaldo(100);

console.log(mateus);