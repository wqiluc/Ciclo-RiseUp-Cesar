class Animal{
    constructor(nome){
        this.nome = nome;
    }

    fazerBarulho(){
        console.log("RRRaaahhh");
    }

}

class Cachorro extends Animal{

    // Classe Vazia

}

const cachorro = new Cachorro();
cachorro.fazerBarulho();


class Gato extends Animal{

    fazerBarulhoGato(){
        console.log("Miaaau");
    }

}

const gato = new Gato();
gato.fazerBarulhoGato();