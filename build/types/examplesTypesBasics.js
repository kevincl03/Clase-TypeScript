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
console.log(numberOne, 'Agregar valor al array');
//# sourceMappingURL=examplesTypesBasics.js.map