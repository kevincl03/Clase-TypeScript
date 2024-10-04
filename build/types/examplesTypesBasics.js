const year = 2024;
console.log(year, '=>Example Type Number\n');
const firstName = 'Roberto Carlos';
console.log(firstName, '=>Example Type String\n');
const isActive = true;
console.log(isActive, '=>Example Type Boolean\n');
console.log('\nExample Type Any:\n');
let exampleAny = 'Example';
console.log(exampleAny, '=>Type string\n');
exampleAny = false;
console.log(exampleAny, '=>Type Boolean\n');
const products = [2, 3, 4, 6, 3];
const books = ['coffe', 'bread'];
const stores = [9, 4, 7, 3];
const coin = ['hola', 'hello', 'status'];
const peopleOne = ['array', 1, true, { id: 1, name: 'brayan' }];
const dateOne = ['1', 10, true];
console.log(dateOne, 'Tupla');
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
const c = Color.Verde;
console.log(`\nNumero de color: ${c}`, 'Enum');
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 1] = "Lunes";
    Dia[Dia["Martes"] = 2] = "Martes";
    Dia[Dia["Miercoles"] = 3] = "Miercoles";
})(Dia || (Dia = {}));
const d = Dia.Miercoles;
console.log(`Numero de Dia: ${d}`, 'Enum');
var Types;
(function (Types) {
    Types[Types["id"] = 1] = "id";
    Types["name"] = "tienda";
    Types["status"] = "activo";
})(Types || (Types = {}));
const name1 = Types.name;
console.log(name1, 'Enum\n');
function saludar() {
    const aux = 0;
    console.log(aux, 'hello');
}
function llegada() {
    const name = 'Hello Word';
    return name;
}
function typeBoolean() {
    const name = false;
    return name;
}
const car1 = {
    make: 'Toyota',
    model: 'caarry',
    year: 7,
};
const car2 = {
    make: 'Toyota',
    model: 'caarry',
    year: 7,
};
let nothing = null;
nothing = 10;
let noDefined;
const value = false;
const mixed = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
];
const numberOne = [1, 2, 3, 4, 5];
numberOne.push(6);
console.log(numberOne, 'Agregar valor al array en la ultima posicion(6)\n');
numberOne.pop();
console.log(numberOne, 'Ultimo elemento del array eliminado (6)\n');
numberOne.shift();
console.log(numberOne, 'Primer elemento del array eliminado (1)\n');
const index = numberOne.indexOf(4);
console.log(index, 'Index of element\n');
const sumaTotal = numberOne.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumaTotal, 'Suma total de los elementos del array\n');
const cars = [{ id: 1, brand: 'Ford', model: 'Raptor' }, { id: 2, brand: 'Toyota', model: 'Fortuner' }];
const findCar = cars.filter((currentValue) => currentValue.id === 1);
console.log(findCar, 'Carro encontrado id: 1\n');
const evenNumbers = numberOne.filter((num) => num % 2 === 0);
console.log(evenNumbers, 'Numeros pares\n');
const squares = numberOne.map((num) => num * num);
console.log(squares, 'array mapeado\n');
const foundNumber = numberOne.find((num) => num > 2);
console.log(foundNumber, 'Found Number\n');
const allPositive = numberOne.every((num) => num > 0);
console.log(allPositive, 'All Psitive\n');
const onePositive = numberOne.some((num) => num > 1);
console.log(onePositive, 'One Psitive\n');
const sentence = 'Hello world typescript is great';
const words = sentence.split(' ');
console.log(words, 'Words\n');
const joinedSentence = words.join(' ');
console.log(joinedSentence, 'Joined Sentence\n');
//# sourceMappingURL=examplesTypesBasics.js.map