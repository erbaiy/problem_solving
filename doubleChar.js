function double(str) {
  return str
    .split("")
    .map((e) => e.repeat(2))
    .join("");
}
console.log(double("youness"));
