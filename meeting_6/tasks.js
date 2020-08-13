/**
 * Задание 1
 * Дан массив случайных значений ['sdfsd', 2, 3, 4, 'sdf', true]
 * Нужно написать код который отфильтрует в новый массив все числа из исходного [2,3,4] +
 *  */

/**
 * Задание 2
 * Дан массив чисел [2, 4, 1, 4, 5, 3, 12, 20]
 * Нужно написать код который найдет сумму чисел в массиве let total = 51
 *  */

// const numbers = [2, 4, 1];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// console.log(total);

/**
 * Задание 3
 * Дан массив чисел [2, 4, 1, 4, 5, 3, 12, 20]
 * Нужно написать код который найдет среднее арифметическое
 *  */
// const numbers = [2, 4, 1];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// const result = total / numbers.length;
// console.log(result.toFixed(4));
/**
 * Задание 4
 * Дан массив чисел [2, 4, 1, 4, 5, 3, 12, 20]
 * Нужно написать код который найдет максимальное значение в массиве
 *  */

// const numbers = [2, 4, 1, 4, 5, 3, 12, 20, 60, 8, 12];
// let max = 0;

// for (let number of numbers) {
//   if (number > max) {
//     max = number;
//   }
// }

// alert(max);

/**
 * Задание 5
 * Дан массив товаров [{title: 'Macbook', price: 1200}, {title: 'iPhone', price: 890}, {title: 'IBM', price: 1300}, {title: 'Dell', price: 700}]
 * Нужно написать код который найдет товар с максимальной ценой
 *  */
// const products = [
//   { title: 'Macbook', price: 1500 },
//   { title: 'iPhone', price: 800 },
//   { title: 'IBM', price: 1300 },
//   { title: 'Dell', price: 7000 },
// ];

// let mostExpensiveProduct = products[0];

// for (let i = 1; i < products.length; i++) {
//   if (mostExpensiveProduct.price < products[i].price) {
//     mostExpensiveProduct = products[i];
//   }
// }

// alert(
//   'The most expensive product is: ' +
//     mostExpensiveProduct.title +
//     ' and the price is ' +
//     mostExpensiveProduct.price
// );

/**
 * Задание 6
 * Дан массив товаров [{title: 'Macbook', price: 1200}, {title: 'iPhone', price: 890}, {title: 'IBM', price: 1300}, {title: 'Dell', price: 700}]
 * Нужно написать код который найдет товар с минимальной ценой
 *  */

/**
 * Задание 7
 * Дан массив товаров [{title: 'Macbook', price: 1200}, {title: 'iPhone', price: 890}, {title: 'IBM', price: 1300}, {title: 'Dell', price: 700}]
 * Нужно написать код который найдет сумму товаров
 *  */

/**
 * Задание 8
 * Дан массив товаров [{title: 'Macbook', price: 1200}, {title: 'iPhone', price: 890}, {title: 'IBM', price: 1300}, {title: 'Dell', price: 700}]
 * Нужно написать код который найдет сумму товаров
 *  */

// const products = [
//   { title: 'Macbook', price: 1200 },
//   { title: 'iPhone', price: 890 },
//   { title: 'IBM', price: 1300 },
//   { title: 'Dell', price: 700 },
// ];
// let total = 0;

// for (let product of products) {
//   total += product.price;
// }

// // for (let i = 0; i < products.length; i++) {
// //   let product = products[i];
// //   total += product.price;
// // }

// alert('Total items ' + total);

/**
 * Задание 9
 * Дан обьект {'John': 400, 'Jack': 500, 'Johan': 1200, 'Alex': 990, 'Floyd': 860}
 * Нужно написать код который найдет сотрудника с максимальной зарплатой(вернет имя сотружника в консоль)
 *  */

const employees = {
  John: 400,
  Jack: 500,
  Johan: 1200,
  Alex: 9900,
  Floyd: 860,
};
let maxValue = 0;
let maxKey;
for (let name in employees) {
  if (employees[name] > maxValue) {
    maxValue = employees[name];
    maxKey = name;
  }
}

alert('Employee with highest salary ' + maxKey + ' ' + maxValue);

/**
 * Задание 11
 * Дан обьект {'John': 400, 'Jack': 500, 'Johan': 1200, 'Alex': 990, 'Floyd': 860}
 * Нужно написать код который найдет сотрудника с минимальной зарплатой(вернет имя сотружника в консоль)
 *  */

const empl = { John: 400, Jack: 500, Johan: 1200, Alex: 990, Floyd: 860 }; //найти сотрудника с мин зп
let mainValue = Number.MAX_SAFE_INTEGER;
let minKey;
for (let name in empl) {
  if (empl[name] < mainValue) {
    mainValue = empl[name];
    minKey = name;
  }
}
console.log(minKey);

/**
 * Задание 11
 * Дан обьект {'John': 400, 'Jack': 500, 'Johan': 1200, 'Alex': 990, 'Floyd': 860}
 * Нужно написать код который найдет сумму зарплат сотрудников
 *  */
