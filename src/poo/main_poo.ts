import { Comercial } from "./Comecial";
import { Construccion } from "./Construccion";
import { IPersona } from "./IPersona";
import { Residencial } from "./Residencial";
import { Hombre, Mujer } from "./personas";

const hombre1: IPersona = new Hombre('Juan', 'Lopera');
hombre1.edad = 17;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 15;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('Juan Manuel Lopera');
hombre3.edad = 56;
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre(undefined, 'Pepe');
hombre4.edad = 15;
hombre4.nombre_completo();

const mujer: IPersona = new Mujer();

const residencial = new Residencial( 6 );
console.log('Impuestos de residencial', residencial.impuestos());
residencial.agregar_habitante(hombre1);
residencial.agregar_habitante(hombre2);
residencial.agregar_habitante(hombre3);
residencial.agregar_habitante(hombre4);
residencial.agregar_habitante(mujer);
residencial.listar_habitantes();

const comercial = new Comercial( 3, 25 );
console.log('Impuestos de comercial', comercial.impuestos());

console.log(`La constructora bienes y buenes hizo ${Construccion.edificios_contador()} construcciones.`);
