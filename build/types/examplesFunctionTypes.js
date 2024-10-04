const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
const message = 'Bienvenidos al ITP';
const names = 'michael, anderson, yadir, kevin, emerson';
const arrayProducts = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscont: 700,
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        priceDiscont: 1500,
    },
];
const arrayO1 = [1, 2, 3, 4];
const arrayO2 = [6, 7, 8, 9];
auxNumber.push(10, 12, 15, 17);
console.log(auxNumber, 'Agregar 10, 12, 15, 17 al array\n');
auxNumber.pop();
console.log(auxNumber, 'ultimo elemento eliminado\n');
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);
console.log(index1, 'index number 1');
console.log(index4, 'index number 4');
console.log(index7, 'index number 7\n');
const arraySectionNumber = auxNumber.slice(2, 9);
console.log(arraySectionNumber, 'array extraido de posicion 2-9\n');
const allPositives = auxNumber.every((num) => num > 1);
console.log(allPositives, 'All Positives\n');
const onePositives = auxNumber.some((num) => num >= 7);
console.log(onePositives, 'One Positives\n');
auxString.push('10', '11', '12', '13', '14');
console.log(auxString, 'Add the array 10,11,12,13,14\n');
const index10 = auxString.indexOf('10');
const index11 = auxString.indexOf('11');
const index14 = auxString.indexOf('14');
console.log(index10, 'index string 10');
console.log(index11, 'index string 11');
console.log(index14, 'index string 14\n');
const words2 = message.split(' ');
console.log(words2, 'Words\n');
const joinSentence = words2.join(',');
console.log(joinSentence, 'Joined Sentence\n');
const firstNames = names.split(',');
console.log(firstNames, 'Names\n');
const joinNames = firstNames.join(' ');
console.log(joinNames, 'Joined names\n');
const productPrice = arrayProducts.filter((product) => product.price > 900);
console.log(productPrice, 'productos mayores a 900\n');
const auxProductPrice = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        auxProductPrice.push(arrayProducts[i]);
    }
}
console.log(auxProductPrice, 'productos mayores a 900 con for');
//# sourceMappingURL=examplesFunctionTypes.js.map