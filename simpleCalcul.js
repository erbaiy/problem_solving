function calcul(num1, num2, operature) {
  let result;
  let x = operature;
  if (x === "+") {
    result = num1 + num2;
  }
  if (x === "-") {
    result = num1 + num2;
  }
  if (x === "*") {
    result = num1 * num2;
  }

  return result;
}
console.log(calcul(1, 2, "*"));
