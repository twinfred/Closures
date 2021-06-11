function sum(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

console.log(sum(2)(3)); // 5

const addTwo = sum(2);

console.log(addTwo(10)); // 12

function multiply(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

console.log(multiply(5)(12)); // 60

const multiplyByTwo = multiply(2);

console.log(multiplyByTwo(20)); // 40