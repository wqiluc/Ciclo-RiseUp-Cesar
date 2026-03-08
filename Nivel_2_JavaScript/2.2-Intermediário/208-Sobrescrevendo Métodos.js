class Animal{
    constructor(nome){
        this.nome = nome;
    }

    fazerBarulho(){
        console.log("Animal fazendo barulho");
    }
}

class Cachorro extends Animal{

    fazerBarulho(){
        console.log("Au au");
    }

}

const cachorro = new Cachorro("Rex");
cachorro.fazerBarulho();

class Gato extends Animal{

    fazerBarulho(){
        console.log("Miaaau");
    }

}

const gato = new Gato("Mimi");
gato.fazerBarulho();