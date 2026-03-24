/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}
/**
 * Subtracts two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}
/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}
/**
 * Divides two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The quotient of a and b.
 */
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
}
/**
 * Calculates a value with a discount.
 * @param {number} value1 - The first value.
 * @param {number} value2 - The second value.
 * @param {string} operationsType - The type of operation to perform.
 * @param {boolean} hasDiscount - Whether to apply a discount.
 * @returns {number} The result of the operation with discount applied.
 */
function calculateWithDiscount(value1, value2, operationsType, hasDiscount) {
  let result;
  if (operationsType === "add") {
    result = add(value1, value2);
  } else if (operationType === "multiply") {
    result = multiply(value1, value2);
  } else {
    throw new Error("unknown operation type");
  }
  if (hasDiscount) {
    result = result > 100 ? result * 0.9 : result * 0.95;
  }
  return result;
}
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculateWithDiscount,
};
