function localPow(x) {
    return Math.pow(this, x);
}

let g = localPow.bind(2.17);
console.log(g(2));

let karri = function(number) {
    return function(power) {
        return Math.pow(number, power);
    }
}

let g2 = karri(2);
console.log('2^2 = ' + g2(2));
console.log('2^3 = ' + g2(3));