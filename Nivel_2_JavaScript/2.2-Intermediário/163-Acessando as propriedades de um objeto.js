//

const usuario = {
    nome: "Lucas",
    email: "lpp2@cesar.school",
    mensagem: function() {
        return (`Olá, ${this.nome}! Seu e-mail é ${this.email}`);
    }
}
console.log(usuario.mensagem()); // Saída: "Olá, Lucas! Seu e-mail é lpp2@cesar.school"