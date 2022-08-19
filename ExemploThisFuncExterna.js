//criando uma função externa que usa o this para desacoplar o nome e email de um só objeto para usar dinamicamente
function imprimeNomeEmail() {
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

//objetos que tem nomes e emails diferentes
const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
   pessoa2.imprimeInfo()
   //nome: Paula, email p@email.com