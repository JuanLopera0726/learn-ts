import { Construccion } from "./Construccion";

export class Comercial extends Construccion {

    // Existe la opción refactorizar
    private _cantidad_ingresos!: number;
    private _empleados: number;

    constructor(pisos: number, empleados: number) {
        super(pisos)
        this._empleados = empleados;
    }

    // Funciona de igual manera que al no utilizarlo
    // impuestos(): number {
    //     return super.impuestos();
    // }

    public cantidad_empleados(): number {
        return this._empleados;
    }
    public get cantidad_ingresos(): number {
        return this._cantidad_ingresos;
    }

    public set cantidad_ingresos(_cantidad_ingresos: number) {
        this._cantidad_ingresos = _cantidad_ingresos;
    }
}