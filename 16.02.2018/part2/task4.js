const qv = function() {
    return this * this;
}

console.log(qv.call(13));