(function() {
    console.log(x * x)
    
})(x = 3);

result = (function(a, b) {
   return a + b; 
})(10, 7);
console.log(result);