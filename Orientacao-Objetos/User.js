//CLASSES
export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = new User('Mateus Orlandin', 'm@m.com', '13/08/2002');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());