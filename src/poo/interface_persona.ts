export interface IPersona {
    readonly nombre: string;
    readonly apellido: string;
    edad: number;

    nombre_completo(): string;
}