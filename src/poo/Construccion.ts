abstract class Construccion {
    static cantidad_edificios: number;
    private pisos: number;

    constructor(pisos: number) {
        this.pisos = pisos;
        let contador = Construccion.cantidad_edificios;
        contador + 1;
    }

    impuestos(): number {
        
    }
    get_pisos(): number {

    }
    set_pisos(pisos: number): {

    }
    static edificios_contador(): number {

    }


}