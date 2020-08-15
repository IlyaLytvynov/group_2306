function findMax(numbers) {
  let maxValue = 0;

  for (let number of numbers) {
    if (number > maxValue) {
      maxValue = number;
    }
  }
  return maxValue;
}

findMax([2, 3, 4]);

function objectValues(object) {
  const values = [];
  for (const key in object) {
    const value = object[key];
    values.push(value);
  }
  return values;
}
console.log(
  objectValues({
    title: 'Hello',
    price: '1200',
    outOfStock: false,
    test: 'test',
  })
); // ['Hello', '1200', false]

compareArrays([1, 2, 3], [1, 2, 3]); // true
compareArrays([2, 1, 3], [1, 2, 3]); // false

function compareArrays(arr1 = [], arr2 = []) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let isEqual = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) {
      isEqual = false;
      break;
    }
  }

  return isEqual;
}

function isObjectEqual(obj1, obj2) {}

isObjectEqual(
  { title: 'test', hello: 'world' },
  { title: 'test', hello: 'world' }
); // true
isObjectEqual(
  { title: 'test', hello: 'world' },
  { title: 'test2', hello: 'world' }
); // false

// function compareArrays(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//       const element2 = arr2[j];
//       if (element !== element2) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }
