// Taller: number, string, boolean, any. Imprimir en consola.
// Tipos basicos.

// ejemplo tipo numero
const year: number = 2024;
console.log(year, '=>Example Type Number\n');

// ejemplo tipo string
const firstName: string = 'Roberto Carlos';
console.log(firstName, '=>Example Type String\n');

// ejemplo tipo booleano.
const isActive: boolean = true;
console.log(isActive, '=>Example Type Boolean\n');

// ejemplo tipo any.
console.log('\nExample Type Any:\n');
let exampleAny: any = 'Example';
console.log(exampleAny, '=>Type string\n');
exampleAny = false;
console.log(exampleAny, '=>Type Boolean\n');

// otros tipos

// array
const products: Array<number> = [2, 3, 4, 6, 3];
const books: Array<string> = ['coffe', 'bread'];
const stores: number[] = [9, 4, 7, 3];
const coin: string[] = ['hola', 'hello', 'status'];
const peopleOne: any[] = ['array', 1, true, { id: 1, name: 'brayan' }];

// tuple
const dateOne: [string, number, boolean] = ['1', 10, true];
console.log(dateOne, 'Tupla');

// enum
enum Color { Rojo, Verde, Azul}
const c: Color = Color.Verde;
console.log(`\nNumero de color: ${c}`, 'Enum');

enum Dia { Lunes = 1, Martes, Miercoles }
const d: Dia = Dia.Miercoles;
console.log(`Numero de Dia: ${d}`, 'Enum');

enum Types {
   id = 1,
   name = 'tienda',
   status = 'activo',
}
const name1: Types = Types.name;
console.log(name1, 'Enum\n');

// funcion no retorna nada: void
function saludar(): void {
   const aux: number = 0;
   console.log(aux, 'hello');
}

// funcion retorna string.
function llegada(): string {
   const name: string = 'Hello Word';
   return name;
}

// funcion retorna booleano.
function typeBoolean(): boolean {
   const name: boolean = false;
   return name;
}

// object sin tipar.
const car1 = {
   make: 'Toyota',
   model: 'caarry',
   year: 7,
};
// object tipado
const car2: { make: string; model: string; year: number } = {
   make: 'Toyota',
   model: 'caarry',
   year: 7,
};

// null y undefined.
// null es el mas usado.
let nothing: any = null;
nothing = 10;
let noDefined: undefined;

// union
const value: string | boolean | number = false;

// array de tuplas
const mixed: [number, string] [] = [
   [1, 'one'],
   [2, 'two'],
   [3, 'three'],
];

// añadir elementos al array.
const numberOne: number[] = [1, 2, 3, 4, 5];
numberOne.push(6);
console.log(numberOne, 'Agregar valor al array');
