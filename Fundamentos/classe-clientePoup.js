//classe Cliente
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

//clase Cliente Poupança vai aproveitar alguns metodos e atributos da classe Cliente
// Com o extends, os métodos já estão disponíveis para serem reutilizados da classe Cliente
class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        //com o metodo super é possivel reutilizar atributos da classe Cliente
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    addSaldoPoup(valor){
        this.saldoPoupanca += valor;
    }

    printSaldoPoup(){
        console.log('Saldo Poupança: '+this.saldoPoupanca);
    }
}

//criando um ClientePoupanca
const cliente1 = new ClientePoupanca("Orlandin", "orlandin@email.com", "029.182.210-12", 100, 200);

//teste do ClientePoupanca
console.log(cliente1);//OK, funciona

//teste de metodos da classe Cliente para um ClientePoupanca e teste de metodos ClientePoupanca
cliente1.addSaldo(20);//OK, funciona
cliente1.printSaldo();//OK, funciona
cliente1.addSaldoPoup(30);//OK, funciona
cliente1.printSaldoPoup();//OK, funciona