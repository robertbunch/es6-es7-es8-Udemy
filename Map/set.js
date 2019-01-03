// Set
// A set is similiar to an array... except its not an array. (no push, no pop, etc.)
// It can hold any data type
// All elements are unique
// A set are iterable (insertion order)

// let employeeId = new Set([`a12`,`e7`,`c2`,`a12`]);
// console.log(employeeId)
// employeeId.forEach((emp)=>{
// 	console.log(emp)
// })
let employeeSet = new Set();
console.log(employeeSet)

const obj = {
	name: `Jane`,
	position: `CTO`,
	tenure: `12 years`
}

// size property (like length in array)
employeeSet.add({
	name: `Jane`,
	position: `CTO`,
	tenure: `12 years`
})

employeeSet.add({
	name: `Jane`,
	position: `CTO`,
	tenure: `12 years`
})

console.log(employeeSet)


// add
// clear - empty the Set
// delete a particular element
// entries - like Map, it returns iterable, each element in the iterable
// is an array, [0] key = value, [1] value = value
// console.log(employeeSet.entries())

// forEach
// has - check for presence of an element
// keys, values

// employeeSet.has(obj)



console.log(typeof(`test`))
