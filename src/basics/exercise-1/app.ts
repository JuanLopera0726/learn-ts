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

// Tuplas
let exampleTuple: [string, null] = ['hola', null];

// Tipos personalizado
type statusCode = 'active' | 'inactive';

let studentStatus: statusCode = 'inactive';