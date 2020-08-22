/**
 *
 * @param {Array<number>} numbers
 * @returns {Array<numbers>}
 */
function findEven(numbers) {
  let res = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      res.push(num);
    }
  }
  return res;
}

findEven([1, 3, 2, 4, 6, 5, 8]); // [2,4,6,8]
/**
 *
 * @param {number} number week day in format 0-6
 * @returns {string} week day in format 'monday', 'tuesday' ...
 */
function getWeekDay(number) {
  let days = ['monday', 'tuesday', 'wendsday', 'th', 'fr', 'sat', 'sun'];
  return days[number];
}

getWeekDay(0); // 'monday'

/**
 * @param {string} text
 * @return {number} count of vowels in text e.g. for hello return 2 because e o only vowel
 */
function vowelCount(string) {
  let count = 0;
  const casedStr = string.toLowerCase();
  let vowels = ['o', 'u', 'i', 'y', 'a', 'e'];
  for (let i = 0; i < casedStr.length; i++) {
    const symbol = casedStr[i];
    if (vowels.indexOf(symbol) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(vowelCount('Hello world'));

vowelCount('worlde'); //o u i y a e

vowelCount('world'); // o u y a e i
