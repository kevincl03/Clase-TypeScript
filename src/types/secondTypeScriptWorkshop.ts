// Taller Completo de TypeScript

// 1. Declara variables utilizando todos los tipos primitivos mencionados

console.log('-------- Punto 1 --------\n');

// ejemplo tipo numero
const years: number = 2024;
console.log(years, '=>Example Type Number\n');

// ejemplo tipo string
const fullName: string = 'Roberto Carlos';
console.log(fullName, '=>Example Type String\n');

// ejemplo tipo booleano.
const isActives: boolean = true;
console.log(isActives, '=>Example Type Boolean\n');

// ejemplo tipo any.
console.log('\nExample Type Any:\n');
let examplesAny: any = 'Example';
console.log(examplesAny, '=>Any Type string\n');
examplesAny = false;
console.log(examplesAny, '=>Any Type Boolean\n');

// 2. Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros

console.log('-------- Punto 2 --------\n');

function calculateRectangleArea(base: number, height: number): number {
   return (base * height);
}
const rectangleArea: number = calculateRectangleArea(6, 4);
console.log(rectangleArea, 'm^2 =>Rectangle Area\n');

// 3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información

console.log('-------- Punto 3 --------\n');

class Car {
   private make: string;
   private model: string;
   private color: string;

   constructor(make: string, model: string, color: string) {
      this.make = make;
      this.model = model;
      this.color = color;
   }

   public showInformation(): void {
      console.log(`Car Information:\nMake: ${this.make}\nModel: ${this.model}\nColor: ${this.color}\n`);
   }
}
const carOne: Car = new Car('Ford', 'Raptor', 'Blue');
carOne.showInformation();

// 4. Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz

console.log('-------- Punto 4 --------\n');

interface Shape {
   calculateArea(): number;
}

class Rectangle implements Shape {
   private base: number;
   private height: number;

   constructor(base: number, height: number) {
      this.base = base;
      this.height = height;
   }

   public calculateArea(): number {
      return (this.base * this.height);
   }
}
const rectangle: Rectangle = new Rectangle(7, 10);
const area: number = rectangle.calculateArea();
console.log(area, 'm^2 => Area Rectangle\n');

/*
 5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa
 filter para obtener solo los libros de un autor específico
*/

console.log('-------- Punto 5 --------\n');

const bookList: any[] = [
   { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
   { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
   { title: 'La casa de los espíritus', author: 'Isabel Allende' },
   { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
];
const leakedBooks: any[] = bookList.filter((book) => book.author === 'Gabriel García Márquez');
console.log(leakedBooks, '=>Specific Books Leaked\n');

/*
 6. Crea un pequeño programa que utilice todos los conceptos anteriores:

    Define una interfaz Book que tenga title, author, y year.

    Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.

    Usa métodos de clase y arreglos para interactuar con la biblioteca
*/

console.log('-------- Punto 6 --------\n');

interface Book {
   title: string;
   author: string;
   year: string;
}

class Library {
   private booksList: Book[];

   constructor() {
      this.booksList = [];
   }

   public addBook(book: Book): void {
      this.booksList.push(book);
   }

   public searchBooksByAuthor(author: string): Book[] {
      return this.booksList.filter((book) => book.author === author);
   }
}
const library: Library = new Library();
library.addBook({ title: 'El túnel', author: 'Ernesto Sabato', year: '1948' });
library.addBook({ title: 'Rayuela', author: 'Julio Cortázar', year: '1963' });
library.addBook({ title: 'Pedro Páramo', author: 'Juan Rulfo', year: '1955' });
library.addBook({ title: 'Bestiario', author: 'Julio Cortázar', year: '1951' });

const foundBooks: Book[] = library.searchBooksByAuthor('Julio Cortázar');
console.log(foundBooks, '=>Found Books\n');

/*
 8. Uso de ciclos

   1. Escribe un programa que sume todos los números pares del 1 al 100

   2. Contar números impares con while, que hay entre 1 y 30

   3. Imprimir números primos con for y if
*/

console.log('-------- Punto 8 --------\n');

// 1. Escribe un programa que sume todos los números pares del 1 al 100
let sum: number = 0;
for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
      sum += i;
   }
}
console.log(sum, 'Sum of Even Numbers\n');

// 2. Contar números impares con while, que hay entre 1 y 30
let count: number = 1;
let sum2: number = 0;
while (count <= 30) {
   if (count % 2 !== 0) {
      sum2 += count;
   }
   count++;
}
console.log(sum2, 'Addition of Odd Numbers With While Loop\n');

// 3. Imprimir números primos con for y if
console.log('Numeros Primos:\n');
for (let i = 1; i <= 100; i++) {
   let count2: number = 0;
   for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
         count2++;
      }
   }
   if (count2 === 2) {
      console.log(i);
   }
}
