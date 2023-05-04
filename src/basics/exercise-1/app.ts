const teacher = {
    name:'Juan',
    lastName: 'Lopera',
    age:29
};

console.log('Teacher', teacher);

// Primitivos
// Booleans
// Declaración implícita
const isTeacher = true; // Toma el valor que fue declarado y ese es el tipo

let isPlayer = true; // Toma el tipo del valor que se creó
isPlayer = false;

// Declaración explícita
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result = hasErrors ? 'Tiene errores' : 'No tiene errores';

// String
const firstName = 'Juan';
const lastName = "Lopera";

let fullName: string = `Su nombre es ${firstName} ${lastName}, bienvenido`
console.log(fullName.toLocaleUpperCase());

// Number
let countStudents: number = 29;
let average: number = 4.5;

console.log( average.toFixed() );

// Array
let fruits = ['pera', 'banano'];
let sports: string[] = ['fútbol', 'baloncesto'];

type stringOrNull = string | null;

// Union Types
let students: Array<stringOrNull> = ['Nico', 'Juan', null, 'Rayffer', null, 'Ana'];
console.log(students.filter((student) => student !== null));

// Tuplas (posiciones si o si)
let exampleTuple: [string, null] = ['hola', null];

// Tipos personalizado
type statusCode = 'active' | 'inactive';

let studentStatus: statusCode = 'inactive';

// Any (Mala práctica)
let working: any = 25;
working = 'hola';

// Funciones 
/**
 * function nombreFuncion(parámetro: tipoDato): tipoDatoQueRetornaLaFuncion { }
 */ 
function validateValue( value: unknown ): boolean {

    // unknown es un tipo de dato que es desconocido 
    // para cualquier validación que deba hacer con el dato
    // debo primero saber o validar de que tipo de dato es
    if (typeof value === 'string') {
        console.log(value.trim().toUpperCase());
    } else if (typeof value === 'number') {
        console.log(value.toFixed);
    }

    if (value === '') {
        return false;
    }
    return true;

}

function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// Void
function processResponse(saved: boolean): void {
    if (saved) {
        console.log('Guardado');
    } else {
        console.log('Ocurrió un error');
    }
}
console.log( getFullName(firstName, lastName ) );
processResponse(true);

enum Role {
    Admin = 'ADMIN',
    Client = 'CLIENT',
    Users = 'USERS',
    SuperAdmin = 'SUPER'
}

let users: Array< {name: string, role: Role} > = [
    
    {
        name:'Pepito',
        role: Role.Admin
    },
    {
        name: 'Juanito',
        role: Role.Client
    },
    {
        name: 'Fulanito',
        role: Role.Client
    }

]

console.log(users.filter((user) => user.role === Role.Client) );