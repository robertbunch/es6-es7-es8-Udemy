// for loop is a good example for this concept.
// see other langauge files...

// ES5 and before, there is only one scope other than global... function scope. This was to make it EASY for small programs.
// This is extremely beginner friendly, but bad news when the code case gets big because you will definitely make unintended mistake
// If you drop the loop inside a function, i won't exist later
// really confusing:

// "use strict";
// var i = 1;
// console.log(i);

for(i = 0; i < 10; i++){
  console.log(i);
}

console.log("Value after loop: ",i);


// HOISTING
// means that all vars will be hoisted, or moved to the top of their scope
var sum = 1;

function sum_numbers(a,b){
    console.log("Expect 1 (parent sum): ", sum); //get undefined
    
    var sum = a + b;
    console.log("Expect 5 from 2+3 (a and b): ", sum);
}
sum_numbers(3,5)
console.log("Expect 5 from child ", sum);


// With let
for(let i = 0; i < 10; i++){
    // console.log(i);
}

console.log("What's i? ",i)

for(var i = 0; i < 10; i++){
    // console.log(i);
}

console.log("What's i? ",i)



// CONST - bad name
// •	Bind vs. write
// Const isn't really immutable
// •	No hoisting
// generally use const if you can. It will prevent unexpected behavior because JS will try and protect your state
// JS is single-threaded, so we don't have to deal with multiple processes as teh same time, but it still gets really 
// difficult to troubleshoot. It's a primary reason why constants are so important
const z = 2;
// z = 3; Syntax Error
const arr = [1,2,3,4];
console.log("Before: ",arr)
arr.push(5)
console.log("After: ",arr)

const obj = {
    name:"Rob",
    career: "Teacher"
}

obj.gender = "male"
console.log(obj)