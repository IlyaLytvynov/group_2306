import { printResult } from './printResult.js';

/**
 * JSDOC
 * @param {Array<number>} numbers
 * @return {number}
 */
function findArithmeticMean(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}
/**
 * Запросить данные пользователя(числа)
 * @returns {Array<number>}
 */
function getUserInput() {
  const userInputs = [];
  let number;

  do {
    let userInput = prompt('Enter number');

    if (userInput === null || userInput === undefined) {
      break;
    }

    number = Number(userInput);

    if (isNaN(number)) {
      break;
    }

    userInputs.push(number);
  } while (true);

  return userInputs;
}
// ВЫБОР ЭЛЕМЕНТА ИЗ DOM document object model
const btn = document.querySelector('#Btn1');
console.log(btn);
btn.onclick = onClickHandler;
btn.style.border = '10px solid green';

const input = document.querySelector('#test');

function onClickHandler() {
  btn.style.backgroundColor = 'red';
  input.style.padding = '20px';
  const userValues = getUserInput();
  const arithmeticMean = findArithmeticMean(userValues);
  printResult(arithmeticMean);
}

// const otherNumbers = [2, 3, 5, 6, 12, 3, 4, 6];
// getArithmeticMeanGood(otherNumbers);
// getArithmeticMeanGood([3, 3, 3]);
// getArithmeticMeanGood([2, 2, 2]);
