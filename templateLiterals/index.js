let harry = `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.`;
let lotr = `When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.`
let orwell = `It was a bright cold day in April, and the clocks were striking thirteen.” — 1984, George Orwell`
let lines = [
  harry,
  lotr,
  orwell
];
// Tagged Templates

// // function buildHTML(strings, expr){
// function buildHTML(tags, lines){
//   // console.log(strings)
//   // console.log(expr);
//   // console.log(expr2);
//   const newHTML = lines.map(function(line){
//     return `${tags[0]}${line}${tags[1]}`
//   });
//   return newHTML;
// }

// const result = buildHTML`<li>${lines}</li>`;
// console.log(result);
// document.querySelector('#quotes').innerHTML = result;

// const placeHTML = buildHTML2`<li>${lines}</li>`;
// placeHTML('#quotes');

// function buildHTML2(tags, lines){
//   return function(element){
//     const newHTML = lines.map(function(line){
//       return `${tags[0]}${line}${tags[1]}`
//     });
//     // THIS IS NOT JSX/these are not components. You cant drop an array into the DOM
//     const finalHTML = newHTML.join(''); //will remove all the , and turn it into a string
//     document.querySelector(element).innerHTML += finalHTML
//   }
// }

function testFunction(){
  return "Hello, from inside test Function"
}

const templateLiteralCallback = `Rob Jim Bill ${()=>testFunction()}`
console.log(templateLiteralCallback);

function taggedCallback(strings, func){
  return strings[0]+func();
}

const taggedLiteralCallback = taggedCallback`Rob Jim Bill ${()=>testFunction()}`
console.log(taggedLiteralCallback)