// Array.prototype.includes() (Firefox 43)
// TypedArray.prototype.includes() (Firefox 43)
// Exponentiation operator (Firefox 52)
// Rest parameter destructuring (Firefox 52)

// Generators and generator methods are no longer constructable (Firefox 43)
// Proxy enumerate handler removed (Firefox 47)


// Operator: var1 ** var2
// superceeds 

const x = 5 ** 2
console.log(x)

2 ** 3 // 8
3 ** 2 // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN

console.log(2 ** 3 ** 2)
console.log(2 ** (3 ** 2))
console.log((2 ** 3) ** 2)

2 ** 3 ** 2 // 512
2 ** (3 ** 2) // 512
// (2 ** 3) ** 2 // 64

// Python and PHP would take this and apply exponential first, then -
// In JS, it's illegal because it's ambigious what you want to do.
// To accomplish, use ()
// const y = -5 ** 2

// includes is an array and typedArray prototype method, so avail on all arrays and typed
// It is almost identitcal to indexOf, but...
// 1. Motivation is different.
// ... if you want to find an element in an array, you use indexOf which is not it's purpose
// 2. indexOf uses strict comparison so it cannot find NaN. I.e., 
console.log(NaN === NaN)

// fromIndex allows you start at whatever index you wish. - starts from the end
// arr.includes(searchElement[, fromIndex])


// Destructuring rest parameters
// =============================
// Destructuring review
const someJSON = {
	name: "Wayne Rooney",
	position: "Forward",
	club: "Manchester United"
}
const { name, position, club } = someJSON
console.log(name)
console.log(position)

// You can accept the data as an array using rest...
// and because it's an array, you can Destructure it back into single vars
// function fn(...data){
function fn(...[n,p,c]){
	console.log(n)
	console.log(p)
	console.log(c)
}
fn(name, position, club)

