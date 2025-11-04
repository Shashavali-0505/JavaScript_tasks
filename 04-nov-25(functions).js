// 1. Function Definition & Function Expression
console.log(a()); 
console.log(b());

function a() {
  return "Function Declaration";
}

var b = function() {
  return "Function Expression";
};
/*
    o/p: Function Declaration // functions are hoisted 
         b is not a function // bcoz b is also be hoisted but not initialised at so calling a b() is meaning less. 
*/

// 2. Anonymous Function (inside expression)
let greet = function() {
  return "Hello!";
};
console.log(typeof greet);
console.log(greet.name);
/*
    o/p: function
         greet
*/

// 3. IIFE (Immediately Invoked Function Expression)
let result = (function(x, y) {
  return x * y;
})(3, 4);

console.log(result);
/*
    o/p: 12
*/

// 4. Arrow Function and this
let user = {
  name: "Noor",
  say: () => {
    console.log(this.name);
  },
};
user.say();
/*
    o/p: undefined // bcoz this searches for the outer scope/global scope
*/

// 5. Generator Function
function* counter() {
  yield 1;
  yield 2;
  return 3;
}

let gen = counter();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
/*
    o/p: { value: 1, done: false }
         { value: 2, done: false }
         { value: 3, done: true }
    // bcoz :yield pauses and returns values (with done: false)
             return ends the generator (with done: true)
*/

// 6. First-Class Function
function greet(name) {
  return "Hello " + name;
}

function execute(fn, value) {
  return fn(value);
}

console.log(execute(greet, "Students"));
/*
    o/p: Hello Students
*/

// 7. Pure Function
let count = 0;
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));   
console.log(count);
/*
    o/p: 7
         0
*/

// 9. Recursion
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));
/*
    o/p: 24
*/

// 10. Callback & Higher-Order Function
function printResult(fn, num) {
  console.log(fn(num));
}

function double(n) {
  return n * 2;
}

printResult(double, 10);
/*
    o/p: 20
*/