//VV EXEMPLO DE CLASE EM JS VV
class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    addSaldo(valor){
        this.saldo += valor;
    }

    printSaldo(){
        console.log('Saldo: '+this.saldo);
    }
}

//criando um novo cliente
const cliente1 = new Cliente("Mateus", "mateus.orlandin@gmail.com", "082.674.215-44", 200);

//teste print cliente1
// console.log(cliente1);//R: printou como objeto

//teste addSaldo e printSaldo
cliente1.addSaldo(20);//OK, funciona
cliente1.printSaldo();//OK, funciona