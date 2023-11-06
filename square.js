function morabaa(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(array[i] * array[i]);
    }
  }
  return newArray;
}
console.log("sdfghjkl");
console.log(morabaa([1, 8, 6, 4]));
