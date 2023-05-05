class Animal {
    private color!: string;
    especie!: string;
    peso!: string;
    protected tamanio!: string;

    constructor () {
        console.log('Creando un animal');
        
    }
    alimentarse(): void {
        console.log('Alimentándome');
    }
}

// La herencia se da gracias a la palabra reservada extends
class Gato extends Animal {

    constructor () {
        super();
        console.log('Creando un gato a partir de animal');
        this.alimentarse();
    }
    
    private molestar() {

    }
}

class Perro extends Animal {

    constructor () {
        super();
        console.log('Creando un perro a partir de animal');
    }

    public jugando() {

    }
}

const cualquierAnimal: Animal = new Animal();
