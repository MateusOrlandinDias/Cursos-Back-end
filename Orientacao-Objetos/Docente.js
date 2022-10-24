import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role='docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}`;
    }
}

const novoDocente = new Docente('Mariana', 'ma@m.com', '05/10/2009');
console.log(novoDocente.aprovaEstudante('Jacir', 'SI'));