class Auto {
    // Atributos de la clase o propiedades
    color: string; //= 'Negro'; Inicializar directamente
    puertas: number; //Inicializar en el constructor
    marca?: string; //Marcar como opcionales

    // Inicializar propiedades de la clase - primer método que se ejecuta al realizar una instancia de la clase 
    constructor(marca?: string) {
        this.color = 'Negro';
        this.puertas = 4; // self - accedo a todas las propiedades y métodos de la clase
        this.marca = marca;
    }   

    // Métodos de la clase
    acelerar () {
        console.log('Acelerando');
    }

    frenar () {
        console.log('Frenando');
    }

    prender() {
        console.log('Prendiendo');
    }
}

let ferrari: Auto = new Auto(); //Instancia de la clase auto - Objeto
console.log(ferrari); 
console.log(ferrari.marca); 
ferrari.marca = 'Ferrari'; 
console.log(ferrari.marca); 
console.log(ferrari); 
ferrari.color = 'Blanco';
console.log(ferrari); 

let audi = new Auto('Audi');
console.log(audi); 
audi.puertas = 4;
audi.color = 'Exótico';
console.log(audi); 

class Auto2 {

    color: string = 'Negro'; // Implícita por defecto es público
    public puertas: number; // Forma explícita para colocar un propiedad pública

    // En el constructor yo puedo crear propiedades de la clase
    // si y solo si tienen el modificador de acceso (public, private, protected)

    // Y además los parámetros que son opcionales, siempre deben ir al final de cualquier método o función
    // en este caso el constructor es un método
    constructor (public peso: number, public marca?: string) {
        this.puertas = 4;
        this.encender();
    }


    apagar() {
        console.log('Apagando...');
    }

    private encender() {
        console.log(` Bienvenido ${this.marca}, tu color es ${this.color}, tu peso es ${this.peso} y tienes ${this.puertas} puertas.`);
    }
}

let ford = new Auto2(500, 'Ford');
console.log(ford);
ford.apagar();






