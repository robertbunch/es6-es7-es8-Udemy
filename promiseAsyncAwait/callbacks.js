// // Callbacks
// // functions = 1st class objects
// // - Pass them around
// // - store them inside of a variable
// const printUpper = function(text){
// 	console.log(text.toUpperCase());
// }

// const printNumber = function(number){
// 	console.log(number);
// }

// function run(callback, input){
// 	callback(input);
// }
// console.log(printUpper)
// run(
// 	function(text){console.log(text.toUpperCase());},
// 	`Hello, World`);

// $.getJSON(url,(data)=>{console.log(data)})

// $.prototype.getJSON = function(url, callback){
// 	// jquery does its httprequestobject thing from url
// 	// gets data... saves as ajaxData
// 	(data(ajaxData)

// }

// function a(x){
// 	console.log(x)
// 	return function(y){
// 		console.log(x+y)
// 	}
// }

// a(2)(3);

// function b(num){
// 	const objectToReturn = {run: `Haha, this is messed up, isn't it?`}
// 	return objectToReturn
// }

// console.log(b(2).run)

const x = Symbol(`a`)
const y = Symbol(`a`)
const z = Symbol(`a`)

console.log(x===y);
console.log(x===z);
console.log(y===z);
