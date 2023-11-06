function noSpace(a) {
  let space = " ";
  let result = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== space) {
      result += a[i];
    }
  }
  return result;
}
console.log(noSpace("younss erbai tasi"));
// function noSpace(a) {
//   console.log("work");
//   return a.split(" ").join("");
// }
// console.log(noSpace("younss erbai tasi"));
