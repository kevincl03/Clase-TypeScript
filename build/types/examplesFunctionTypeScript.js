const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
const message = 'Bienvenidos al ITP';
const names = 'michael,anderson,yadir,kevin,emerson';
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
const arrayO1 = [1, 7, 3, 6];
const arrayO2 = [4, 2, 8, 9];
auxNumber.push(10, 12, 15, 17);
console.log(auxNumber, '=> Add 10, 12, 15, 17 to the array\n');
auxNumber.pop();
console.log(auxNumber, '=> Last item removed (17)\n');
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);
console.log(index1, '=> Index number 1');
console.log(index4, '=> Index number 4');
console.log(index7, '=> Index number 7\n');
const ExtractedPart = auxNumber.slice(2, 9);
console.log(ExtractedPart, '=> Part taken from positions 2-9\n');
const allOlder = auxNumber.every((num) => num > 1);
console.log(allOlder, '=> All elements greater than 1\n');
const anyElement = auxNumber.some((num) => num >= 7);
console.log(anyElement, '=> Any element >= 7\n');
auxString.push('10', '11', '12', '13', '14');
console.log(auxString, '=> Add 10,11,12,13,14 to the array\n');
const index10 = auxString.indexOf('10');
const index11 = auxString.indexOf('11');
const index14 = auxString.indexOf('14');
console.log(index10, '=> Index string 10');
console.log(index11, '=> Index string 11');
console.log(index14, '=> Index string 14\n');
const words2 = message.split(' ');
console.log(words2, '=> Words\n');
const joinSentence = words2.join(',');
console.log(joinSentence, '=> Joined sentence\n');
const firstNames = names.split(',');
console.log(firstNames, '=> Names\n');
const joinNames = firstNames.join(' ');
console.log(joinNames, '=> Joined names\n');
const productPrice = arrayProducts.filter((product) => product.price > 900);
console.log(productPrice, '=> Products with price > 900\n');
const auxProductPrice = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        auxProductPrice.push(arrayProducts[i]);
    }
}
console.log(auxProductPrice, '=> Products price > 900 with for loop\n');
const foundObject = arrayProducts.find((product) => product.priceDiscont > 500);
console.log(foundObject, '=> Object with discount price > 500\n');
const foundIndex = arrayProducts.findIndex((product) => product.price > 1000);
console.log(foundIndex, '=> Found object index price\n');
arrayProducts.push({
    id: 3,
    name: 'Lenteja',
    price: 1900,
    priceDiscont: 500,
}, {
    id: 4,
    name: 'Cafe',
    price: 5300,
    priceDiscont: 2100,
}, {
    id: 5,
    name: 'Pony Malta',
    price: 4200,
    priceDiscont: 1200,
});
console.log(arrayProducts, '=> Add 3 objects to the array\n');
const concatenatedArray = arrayO1.concat(arrayO2);
console.log(concatenatedArray, '=> Concatenated array with concat()\n');
arrayO1.push(...arrayO2);
console.log(arrayO1, '=> Concatenated array with push()\n');
const sortedArray = concatenatedArray.sort((a, b) => a - b);
console.log(sortedArray, '=> Sorted array with sort()\n');
const reversedArray = sortedArray.reverse();
console.log(reversedArray, '=> Reversed array\n');
//# sourceMappingURL=examplesFunctionTypeScript.js.map