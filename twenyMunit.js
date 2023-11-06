// console.log("youness");
// function array(x, a) {
//   let vent = [];
//   for (let i = 1; i <= a; i++) {
//     let mat = x * i;
//     vent.push(mat);
//   }
//   return vent;
// }

// console.log(array(2, 7));
// console.log("youness");
// function array(x, a) {
//   return Array.from(Array(a + 1).keys())
//     .slice(1)
//     .map((number) => number * x);
// }

// console.log(array(2, 7));
function muliti(a, b) {
  let aray = [];
  for (let i = 1; i <= b; i++) {
    let mat = a * i;
    aray.push(mat);
  }
  return aray;
}
console.log(muliti(2, 6));
