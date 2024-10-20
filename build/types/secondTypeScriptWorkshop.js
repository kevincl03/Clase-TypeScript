console.log('-------- Punto 1 --------\n');
const years = 2024;
console.log(years, '=>Example Type Number\n');
const fullName = 'Roberto Carlos';
console.log(fullName, '=>Example Type String\n');
const isActives = true;
console.log(isActives, '=>Example Type Boolean\n');
console.log('\nExample Type Any:\n');
let examplesAny = 'Example';
console.log(examplesAny, '=>Any Type string\n');
examplesAny = false;
console.log(examplesAny, '=>Any Type Boolean\n');
console.log('-------- Punto 2 --------\n');
function calculateRectangleArea(base, height) {
    return (base * height);
}
const rectangleArea = calculateRectangleArea(6, 4);
console.log(rectangleArea, 'm^2 =>Rectangle Area\n');
console.log('-------- Punto 3 --------\n');
class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    showInformation() {
        console.log(`Car Information:\nMake: ${this.make}\nModel: ${this.model}\nColor: ${this.color}\n`);
    }
}
const carOne = new Car('Ford', 'Raptor', 'Blue');
carOne.showInformation();
console.log('-------- Punto 4 --------\n');
class Rectangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return (this.base * this.height);
    }
}
const rectangle = new Rectangle(7, 10);
const area = rectangle.calculateArea();
console.log(area, 'm^2 => Area Rectangle\n');
console.log('-------- Punto 5 --------\n');
const bookList = [
    { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
    { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
    { title: 'La casa de los espíritus', author: 'Isabel Allende' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
];
const leakedBooks = bookList.filter((book) => book.author === 'Gabriel García Márquez');
console.log(leakedBooks, '=>Specific Books Leaked\n');
console.log('-------- Punto 6 --------\n');
class Library {
    constructor() {
        this.booksList = [];
    }
    addBook(book) {
        this.booksList.push(book);
    }
    searchBooksByAuthor(author) {
        return this.booksList.filter((book) => book.author === author);
    }
}
const library = new Library();
library.addBook({ title: 'El túnel', author: 'Ernesto Sabato', year: '1948' });
library.addBook({ title: 'Rayuela', author: 'Julio Cortázar', year: '1963' });
library.addBook({ title: 'Pedro Páramo', author: 'Juan Rulfo', year: '1955' });
library.addBook({ title: 'Bestiario', author: 'Julio Cortázar', year: '1951' });
const foundBooks = library.searchBooksByAuthor('Julio Cortázar');
console.log(foundBooks, '=>Found Books\n');
console.log('-------- Punto 8 --------\n');
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum, 'Sum of Even Numbers\n');
let count = 1;
let sum2 = 0;
while (count <= 30) {
    if (count % 2 !== 0) {
        sum2 += count;
    }
    count++;
}
console.log(sum2, 'Addition of Odd Numbers With While Loop\n');
console.log('Numeros Primos:\n');
for (let i = 1; i <= 100; i++) {
    let count2 = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count2++;
        }
    }
    if (count2 === 2) {
        console.log(i);
    }
}
//# sourceMappingURL=secondTypeScriptWorkshop.js.map