import { IPersona } from "./interface_persona";

class Hombre implements IPersona {
    nombre: string;
    apellido: string;
    edad!: number;

    constructor(nombre?: string, apellido?: string) {
        this.nombre = nombre ?? '';
        this.apellido = apellido ?? '';
    }

    nombre_completo(): string {
        return `Tu nombre es ${this.nombre} y tu apellido es ${this.apellido}`;
        
    }

    public hablar_futbol(equipo: string, minutos: number) {
        console.log(`Hablemos sobre el: ${equipo} ${minutos} minutos, pues está jugando como los dioses`);
                 
    }
}

class Mujer implements IPersona {
    nombre!: string;
    apellido!: string;
    edad!: number;

    nombre_completo(): string {
        return `Tu nombre es ${this.nombre} y tu apellido es ${this.apellido}`;
    }

    public ir_cine(sala: string, pelicula: string){
        console.log(`Viendo ${pelicula} en ${sala}`);
        
    }
    
}

