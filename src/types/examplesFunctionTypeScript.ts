// taller de typescript

/* 1. agregar el 10,12,15,17 por push()
      eliminar el ultimo ele con pop
      encontrarel indice de un elemento de 1,4,7 con indexOf
      extraer una parte del array de la pos 2-9 con slice
      verificar si todos los elementos son > 1 por every true o false
      verificar si algun elemento sea >=7 con some
*/

/* 2. agg al array por push 10,11,12,13,14 en tipo string
      encontrar el indice de un elemento 10,11,14 con indexOff
*/

/* 3. dividir la cadena en un array de palabras donde el saparador ea el espacio por split()
      a la salida de este tomar el resultado y aplicar un join() donde se separen por comas','
*/

/* 4. dividir el array  en un palabras donde el separador sea las comas por split
      aplicar el join donde separe por espacios
*/

/* 5. filtrar en una const donde el price sea >900 por medio de filter y por medio de un for
      encontrar el primer objeto del array donde priceDiscont > 500 por find
      encontrar el indice del primer elemento del array donde price > 1000 por findIndex
      agregar 3 nuevos objetos producto al array por medio de push
*/

/* 6. concatenar el array01 con array02 por medio de concat y push
      a la res de concat generada ordenar de menor a mayor por sort
      a la res de sort ordenar descendente por reverse
*/

const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const auxString: string[] = ['1', '2', '3', '4', '5', '6', '7'];
const message: string = 'Bienvenidos al ITP';
const names: string = 'michael,anderson,yadir,kevin,emerson';
const arrayProducts: any[] = [
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
const arrayO1: number[] = [1, 7, 3, 6];
const arrayO2: number[] = [4, 2, 8, 9];

// 1.1 agregar el 10,12,15,17 por push()
auxNumber.push(10, 12, 15, 17);
console.log(auxNumber, '=> Add 10, 12, 15, 17 to the array\n');

// 1.2 eliminar el ultimo ele con pop
auxNumber.pop();
console.log(auxNumber, '=> Last item removed (17)\n');

// 1.3 encontrar el indice de un elemento de 1,4,7 con indexOf
const index1: number = auxNumber.indexOf(1);
const index4: number = auxNumber.indexOf(4);
const index7: number = auxNumber.indexOf(7);
console.log(index1, '=> Index number 1');
console.log(index4, '=> Index number 4');
console.log(index7, '=> Index number 7\n');

// 1.4 extraer una parte del array de la pos 2-9 con slice
const ExtractedPart: number[] = auxNumber.slice(2, 9);
console.log(ExtractedPart, '=> Part taken from positions 2-9\n');

// 1.5 verificar si todos los elementos son > 1 por every true o false
const allOlder: boolean = auxNumber.every((num) => num > 1);
console.log(allOlder, '=> All elements greater than 1\n');

// 1.6 verificar si algun elemento sea >=7 con some
const anyElement: boolean = auxNumber.some((num) => num >= 7);
console.log(anyElement, '=> Any element >= 7\n');

// 2.1 agg al array por push 10,11,12,13,14 en tipo string
auxString.push('10', '11', '12', '13', '14');
console.log(auxString, '=> Add 10,11,12,13,14 to the array\n');

// 2.2 encontrar el indice de un elemento 10,11,14 con indexOff
const index10: number = auxString.indexOf('10');
const index11: number = auxString.indexOf('11');
const index14: number = auxString.indexOf('14');
console.log(index10, '=> Index string 10');
console.log(index11, '=> Index string 11');
console.log(index14, '=> Index string 14\n');

// 3.1 dividir la cadena en un array de palabras donde el saparador sea el espacio por split()
const words2: string[] = message.split(' ');
console.log(words2, '=> Words\n');

// 3.2 a la salida de este tomar el resultado y aplicar un join() donde se separen por comas','
const joinSentence: string = words2.join(',');
console.log(joinSentence, '=> Joined sentence\n');

// 4.1 dividir la cadena  en un array de palabras donde el separador sea la coma con split()
const firstNames: string[] = names.split(',');
console.log(firstNames, '=> Names\n');

// 4.2 a la salida aplicar el join donde separe por espacios
const joinNames: string = firstNames.join(' ');
console.log(joinNames, '=> Joined names\n');

// 5.1 filtrar en una const donde el price sea >900 por medio de filter y por medio de un for
const productPrice: any[] = arrayProducts.filter((product) => product.price > 900);
console.log(productPrice, '=> Products with price > 900\n');

const auxProductPrice: any[] = [];
for (let i = 0; i < arrayProducts.length; i++) {
   if (arrayProducts[i].price > 900) {
      auxProductPrice.push(arrayProducts[i]);
   }
}
console.log(auxProductPrice, '=> Products price > 900 with for loop\n');

// 5.2 encontrar el primer objeto del array donde priceDiscont > 500 por find
const foundObject: any = arrayProducts.find((product) => product.priceDiscont > 500);
console.log(foundObject, '=> Object with discount price > 500\n');

// 5.3 encontrar el indice del primer elemento del array donde price > 1000 por findIndex
const foundIndex: number = arrayProducts.findIndex((product) => product.price > 1000);
console.log(foundIndex, '=> Found object index price\n');

// 5.4 agregar 3 nuevos objetos producto al array por medio de push
arrayProducts.push(
   {
      id: 3,
      name: 'Lenteja',
      price: 1900,
      priceDiscont: 500,
   },
   {
      id: 4,
      name: 'Cafe',
      price: 5300,
      priceDiscont: 2100,
   },
   {
      id: 5,
      name: 'Pony Malta',
      price: 4200,
      priceDiscont: 1200,
   },
);
console.log(arrayProducts, '=> Add 3 objects to the array\n');

// 6.1 concatenar el array01 con array02 por medio de concat y push
const concatenatedArray: number[] = arrayO1.concat(arrayO2);
console.log(concatenatedArray, '=> Concatenated array with concat()\n');

arrayO1.push(...arrayO2);
console.log(arrayO1, '=> Concatenated array with push()\n');

// 6.2 a la res de concat generada ordenar de menor a mayor por sort
const sortedArray: number[] = concatenatedArray.sort((a, b) => a - b);
console.log(sortedArray, '=> Sorted array with sort()\n');

// 6.3 a la res de sort ordenar descendente por reverse
const reversedArray: number[] = sortedArray.reverse();
console.log(reversedArray, '=> Reversed array\n');
