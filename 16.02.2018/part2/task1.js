function somethingFunction() {
    console.log("something");
}

var somethingElse = {
    toString: function() {
        return 'something';
    }
}

new somethingFunction;
somethingFunction``;
console.log('' + somethingElse);
// window.onload = somethingFunction;