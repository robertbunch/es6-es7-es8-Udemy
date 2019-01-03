// generators, iterators, iterables, and for..of

function* aGenerator(){
	console.log("I just ran!")
	yield 1;
	console.log("I just ran too!")
}

const gen = aGenerator();
console.log(gen)
gen.next()
gen.next()
gen.next()
gen.next()