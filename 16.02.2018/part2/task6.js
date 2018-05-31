var fac = (number) =>
    (number != 1) ? number * fac(number - 1) : 1;

console.log(fac(3));