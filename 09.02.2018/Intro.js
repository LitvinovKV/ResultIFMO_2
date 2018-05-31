//Console enter: node Intro.js age , x
//age for task2, x for task3

//TASK 1
const a = 0, b = 100, res = Math.floor(a + Math.random() * (b - a + 1));

const middle = res === 50 ? 'center' : 'not center';
console.log(middle);

//TASK 2
age = process.argv[2] || NaN;
const restricted = (age < 18) ? 'yes' : (age === 18) ? 'notsure' : 'no';
console.log(restricted);

//TASK 3
const x = process.argv[3] || NaN;
const answer =  (x != x) ? "=Nan" :
                        (x === null) ? "=null" :
                        (x === undefined) ? "=undefined" :
                        (x === 0) ? "=0" : 
                        (x === "") ? '=""' :
                        (x === false) ? false : "Something else";
                        
console.log(answer);

//TASK 4 (PART 2)
answer = "+!![] + +!![]";

//TASK 5 (PART 3)
// node --print-bytecode Intro.js