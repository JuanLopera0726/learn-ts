export abstract class Construccion {
    static cantidad_edificios: number = 0;
    private _pisos: number;

    constructor(pisos: number) {
        this._pisos = pisos;
        Construccion.cantidad_edificios += 1;
    }

    public impuestos(): number {
        return this._pisos * 3000000;
    }

    get pisos(): number {
        return this._pisos;
    }

    set pisos(pisos: number) {
        this._pisos = pisos;
    }
    
    static edificios_contador(): number {
        return Construccion.cantidad_edificios;
    }


}