import { Construccion } from "./Construccion";
import { IPersona } from "./IPersona";
import { Hombre, Mujer } from "./personas";

class Residencial extends Construccion {
    private habitantes: Array<IPersona>

    constructor(pisos: number, habitantes: Array<IPersona>) {
        super(pisos);
        this.habitantes = habitantes;
        this.impuestos();
    }
    public impuestos(): number {
        return this.pisos * 1500000;
    }
    public numero_habitantes(): number {
        return this.habitantes.length;
    }
    public agregar_habitante(persona: IPersona) {
        this.habitantes.push(persona);
    }
    public listar_habitantes() {
        this.habitantes.forEach((habitante) => {
            console.log(habitante.nombre_completo());
            if (habitante instanceof Hombre) {
                habitante.hablar_futbol('Nacional', 10);
            } else if (habitante instanceof Mujer) {
                habitante.ir_cine('Sala 11', 'Mario');
            }
        });
    }
}