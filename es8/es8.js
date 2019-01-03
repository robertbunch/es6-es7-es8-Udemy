// Object.values() and Object.entries()
// const footballer = {
// 	name: "Wayne Rooney",
// 	position: "Forward",
// 	club: "ManU",
// 	scoringAverage: 1.2
// }

// const footballerEntries = Object.entries(footballer)
// // console.log(footballerEntries)
// console.log(footballerEntries[0])
// console.log(footballerEntries[0][0])


// const footballerVals = Object.values(footballer);
// console.log(footballerVals)

// const footballerVals = [];
// for(prop in footballer){
// 	footballerVals.push(footballer[prop])
// }
// console.log(footballerVals)

// str.padEnd()
// str.padStart()
// const name = "Wayne Rooney";
// // padEnd takes 2 args:
// // 1. How long you want the string to be
// // 2. What should be added in the extra characters... default: " "
// // DOES NOT MUTATE the string
// console.log(name.padEnd(2,"b"))
// console.log(name)

// console.log(name.padStart(20,"b"))
// left-pad = node_module

// Object.getOwnPropertyDescriptors()
// const footballer = {
// 	name: "Wayne Rooney",
// 	position: "Forward",
// 	club: "ManU",
// 	scoringAverage: 1.2
// }
// const descriptors = Object.getOwnPropertyDescriptors(footballer);
// console.log(descriptors)

// Trailing commas in functions
// already existed for arrays, es1
const worldCupClubs = [
	`England`,
	`Senegal`,
	`France`,
	`Russia`,
]
// ES5, added for objects
const england = {
	name: "England",
	place: "3rd",
}
console.log(england)

// ES8, added for functions
function sum(x, y,){
	return x + y
}

console.log(sum(2,3,))

