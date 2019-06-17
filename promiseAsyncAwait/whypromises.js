// What is a promise and why should I care?
// Does a promise make my code faster?
//  - No. In fact, I think, it makes it slower.
// Does a promise give me new powers?
//  - No. JS runs exactly the same as always.
// Uhhh... why would I want to use one then?

// Q, bluebird

// What is a promise?
// All a promise is, is a JavaScript constructor that gives you a few cool methods.
// - then
// - catch
// - All
// - race
// -- resolve, reject

// a promise constructor takes 1 arg:
// 1 . callback
	// The callback itself has 2 args:
	// 1. resolve - provided by JS ... a callback!
	// 2. reject - provided by JS ... a callback!
	// Now that we are inside the callback, the code starts running!

// let myFirstPromise = new Promise((resolve, reject)=>{
// 	console.log("Hey, I'm running!")
// 	console.log("Hey, I'm also running!")
// 	// ajax
// 	// axios(
// 	// 	method:"post")
// 	// http
// 	// sql
// 	// mysql.query
// 	// nosql
// 	const lang = [
// 		'JS',
// 		'Java',
// 		'Go'
// 	]
// 	reject("I did not finish") //Something went wrong!
// 	resolve(lang) // Im DONE!
	
// });
// console.log(myFirstPromise)

// // the then will go on the promise OUTSIDE of the promise.
// // it will keep an eye on teh promise.
// // when the resolve callback is run inside of the promise, the then will 
// // fire off it's callback.
// // then takes 1 arg: callback to run
// myFirstPromise.then((promiseData)=>{
// 	console.log(promiseData)
// })

// myFirstPromise.catch((promiseError)=>{
// 	console.log(promiseError)
// })

// console.log("=====================")
// console.log("I'm the last line in the program!")
// console.log("=====================")




function one(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("2 seconds has passed")
		},2000)
	})
}

function two(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("1 second has passed")
		},1000)
	})
}

const promiseOne = one();
const promiseTwo = two();
promiseOne.then((msgFromPromise)=>{
	console.log("=====1====")
	console.log(msgFromPromise);
	console.log(promiseOne);
})
promiseTwo.then((msgFromPromise)=>{
	console.log("=====2====")
	console.log(msgFromPromise);
	console.log(promiseTwo);
})

console.log(promiseOne);
console.log(promiseTwo);

const promiseArray = [promiseOne,promiseTwo];
console.log(promiseArray)

// all method...
// Promise.all takes 1 arg:
// an array of Promises
// we run then just like always
// this will wait until ALL of the proimses in the array have resolved
Promise.all(promiseArray).then((data)=>{
	console.log("All the promises are done");
	console.log(data)
})

// race method...
// Promise.race takes 1 arg:
// an array of Promises
// we run then just like always
// this will run as soon as ANY promise is resolved
Promise.race(promiseArray).then((data)=>{
	console.log("One of the promises is done. I don't care which!");
	console.log(data)
})

