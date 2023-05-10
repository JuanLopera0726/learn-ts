import { IPersona } from "./IPersona";
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
