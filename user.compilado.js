class User {
  constructor({
    email
  }) {
    this.email = email;
  }

  
  enviarMensagem(){
    console.log(`Mensagem Enviada`)
  }
}


let usuario = new User({
  email: "lpp2@cesar.school"
});

usuario.enviarMensagem();