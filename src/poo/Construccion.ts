export abstract class Construccion {
    // Le pertenece a la clase, no al objeto
    public static cantidad_edificios: number = 0;
    private _pisos: number;

    constructor(pisos: number) {
        this._pisos = pisos;
        Construccion.cantidad_edificios += 1;
    }

    public impuestos(): number {
        return this._pisos * 3000000;
    }

    // Con get y set le dimos acceso de pisos a los demás archivos
    public get pisos(): number {
        return this._pisos;
    }

    public set pisos(pisos: number) {
        this._pisos = pisos;
    }
    
    public static edificios_contador(): number {
        return Construccion.cantidad_edificios;
    }


}