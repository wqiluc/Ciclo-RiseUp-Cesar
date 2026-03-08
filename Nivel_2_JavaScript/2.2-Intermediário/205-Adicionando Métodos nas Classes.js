class Usuario{
    constructor(nome, email){
        this.nome = nome;
        this.email = email;}

    enviarEmail(){
        console.log(`Enviar email para: ${this.nome} no endereço: ${this.email}`);}
}

const usuario = new Usuario("Lucas", "lpp2@cesar.school");

usuario.enviarEmail();