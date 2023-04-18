// let sum = 0;

// const val = (function () {
//   sum = 6;

//   return false;
// })();

// if (sum > 8) {
//   console.log(6 + 6);
// } else {
//   console.log(`The value of val is ${val}`);
// }

function add(numI, numII) {
  return numI + numII;
}

function subtraction(numI, numII) {
  return numII - numI;
}

function multiplication(numI, numII) {
  return numII * numI;
}
function divison(numI, numII) {
  return numI / numII;
}

function operate(number1, callback, number2) {
  return callback(number1, number2);
}

console.log(operate(6, divison, 7));

// .map()
// .reduce()
// .find()
// .filter()

