"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOnes = addOnes;
const dataUser = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
};
console.log(dataUser, 'Object\n');
const peopleArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];
console.log(peopleArray, 'objectsArray\n');
function addOne(a, b) {
    return a + b;
}
function greetOne(name, greeting = 'hello') {
    return `${greeting}, ${name}`;
}
function printNumberOne(...numbers) {
    console.log(numbers.join(','), '\n');
}
const responseFunction = addOne(5, 10);
console.log(responseFunction, 'response function\n');
console.log(greetOne('Alice'), '\n');
printNumberOne(1, 2, 3, 4);
function addOnes(a, b) {
    return a + b;
}
//# sourceMappingURL=examplesInterfaces.js.map