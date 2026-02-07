const discounts = true;
const discountTenOff = 0.1;
const discountFiftyOff = 0.5;
let result = 0;
let temp = 0;
function discount(temp, result, discounts, discountTenOff, discountFiftyOff) {
  if (discounts && temp > 100) {
    return (result = temp - temp * discountTenOff);
  } else {
    return (result = temp - temp * discountFiftyOff);
  }
}

function multiply(a, b, c, d) {
  if (c == 1) {
    temp = a * b;
  }
}
function add(a, b, c, d) {
  if (c == 2) {
    temp = a + b;
  }
}
function calc(x, y, t, d) {
  var result = 0;
  var temp = 0;
  if (t == 1) {
    temp = x * y;
    if (d == true) {
      if (temp > 100) {
        result = temp - temp * 0.1;
      } else {
        result = temp - temp * 0.05;
      }
    } else {
      result = temp;
    }
  } else if (t == 2) {
    temp = x + y;
    if (d == true) {
      if (temp > 100) {
        result = temp - temp * 0.1;
      } else {
        result = temp - temp * 0.05;
      }
    } else {
      result = temp;
    }
  }
  return result;
}
// Usage examples
console.log(calc(10, 20, 1, true)); // Multiplication with discount
console.log(calc(50, 50, 2, true)); // Addition with discount
console.log(calc(30, 40, 1, false)); // Multiplication without discount
