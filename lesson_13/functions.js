console.log(test1(10, 20));

/**
 * Function declaration
 * @param {number} a
 * @param {number} b
 */
function test1(a, b) {
  return a + b;
}

/**
 * Function expression
 * @param {number} a
 * @param {number} b
 */
const test2 = function (a, b) {
  return a + b;
};

/**
 * Arrow function(lyamda function)
 * @param {number} a
 * @param {number} b
 */
const test3 = (a, b) => a + b;

console.log(test2(10, 20));
console.log(test3(10, 20));
