const logged = function (f) {
    return function () {
        console.log(arguments);
        return f.apply(this, arguments);
    }
}

const q = (x) => x * x;

let answer = logged(q);
answer(2);