//
const user = {
  name: 'asdas',
  age: 30,
};
const items = [
  {
    title: 'Ноутбук Lenovo',
    price: 10,
    isAvailable: true,
  },
  {
    title: 'Ноутбук Acer aspyre',
    price: 20,
    isAvailable: true,
  },
];
// const numbers = [10, '56', 90, 'adasdasdd', 10, '2'];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   if (typeof number === 'number') {
//     total += number;
//   } else {
//     const maybeNumber = parseInt(number);
//     if (isNaN(maybeNumber) === false) {
//       total += maybeNumber;
//     }
//   }
// }

// const strNums = ['123', 'gmvm', '23', '4', '8'];
// let result = [];
// for (let i = 0; i < strNums.length; i++) {
//   let number = parseInt.strNums[i];
//   if (!isNaN(number)) {
//     result.push(number);
//   }
// }
// alert(result);

// const strNums = ['123', 'gmvm', '23', '4', '8', '123'];
// let total = 0;
// for (let i = 0; i < strNums.length; i++) {
//   let number = parseInt(strNums[i]);
//   if (!isNaN(number)) {
//     total += number;
//   }
// }
// alert(total);
const numbers = [];

do {
  let inputNumber = prompt('Enter number'); // ' '
  if (!inputNumber) {
    break;
  }
  let number = Number(inputNumber); // 123asdasd => 123  qweqwe123
  if (isNaN(number) === false) {
    numbers.push(number);
    // continue; //
  } else {
    break; // останавливает выполнение цикла
  }
} while (true);

let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   total += numbers[i];
// }

for (let number of numbers) {
  total += number;
}

alert(total);
