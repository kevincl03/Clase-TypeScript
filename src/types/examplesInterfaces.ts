// Interfaz de objeto

interface AppUser {
   id: number;
   name: string;
   email: string;
}

const dataUser: AppUser = {
   id: 1,
   name: 'Alice',
   email: 'alice@example.com',
};
console.log(dataUser, 'Object\n');

// Interfaz de arrays

interface PersonData {
   name: string;
   age: number;
}

const peopleArray: PersonData[] = [
   { name: 'Alice', age: 25 },
   { name: 'Bob', age: 30 },
   { name: 'Charlie', age: 35 },
];
console.log(peopleArray, 'objectsArray\n');

// clases

// funciones

function addOne(a: number, b: number): number {
   return a + b;
}

function greetOne(name: string, greeting: string = 'hello'): string {
   return `${greeting}, ${name}`;
}

function printNumberOne(...numbers: number[]): void {
   console.log(numbers.join(','), '\n');
}

const responseFunction: number = addOne(5, 10);
console.log(responseFunction, 'response function\n');

console.log(greetOne('Alice'), '\n');

printNumberOne(1, 2, 3, 4);

// modulos
// consiste en colocar la palabara export ya sea a las funciones, clases, etc. esto con el fin de importarlas y usarlas en otro archivo.

export function addOnes(a: number, b: number): number {
   return a + b;
}
// tambien es posible hacer asi: export {addOnes, otros...} si se usa ya no es necesario colocarlo en la funcion
// para importar en otro archivo: import { addOnes } from './modules/math'  ruta del archivo
